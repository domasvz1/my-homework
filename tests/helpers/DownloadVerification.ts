import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

/**
 * Comprehensive download verification utilities
 */
export class DownloadVerification {
  
  /**
   * Verify downloaded file exists and has content
   */
  static async verifyFileExists(filePath: string): Promise<boolean> {
    try {
      const stats = fs.statSync(filePath);
      return stats.isFile() && stats.size > 0;
    } catch {
      return false;
    }
  }
  
  /**
   * Get file size in bytes
   */
  static getFileSize(filePath: string): number {
    try {
      const stats = fs.statSync(filePath);
      return stats.size;
    } catch {
      return 0;
    }
  }
  
  /**
   * Verify file size is reasonable (> 10KB, < 50MB)
   */
  static verifyFileSize(filePath: string): { valid: boolean; size: number; error?: string } {
    const size = this.getFileSize(filePath);
    const MIN_SIZE = 10 * 1024; // 10KB
    const MAX_SIZE = 50 * 1024 * 1024; // 50MB
    
    if (size === 0) {
      return { valid: false, size: 0, error: 'File is empty or does not exist' };
    }
    
    if (size < MIN_SIZE) {
      return { valid: false, size, error: `File too small (${size} bytes, minimum ${MIN_SIZE} bytes)` };
    }
    
    if (size > MAX_SIZE) {
      return { valid: false, size, error: `File too large (${size} bytes, maximum ${MAX_SIZE} bytes)` };
    }
    
    return { valid: true, size };
  }
  
  /**
   * Verify file is a valid image using Sharp
   */
  static async verifyImageFormat(filePath: string): Promise<{ valid: boolean; format?: string; error?: string }> {
    try {
      const metadata = await sharp(filePath).metadata();
      
      if (!metadata.format) {
        return { valid: false, error: 'Unable to detect image format' };
      }
      
      const validFormats = ['jpeg', 'jpg', 'png', 'webp', 'gif'];
      if (!validFormats.includes(metadata.format.toLowerCase())) {
        return { valid: false, format: metadata.format, error: `Invalid image format: ${metadata.format}` };
      }
      
      return { valid: true, format: metadata.format };
    } catch (error) {
      return { valid: false, error: `Failed to read image: ${error}` };
    }
  }
  
  /**
   * Get image dimensions
   */
  static async getImageDimensions(filePath: string): Promise<{ width: number; height: number } | null> {
    try {
      const metadata = await sharp(filePath).metadata();
      if (metadata.width && metadata.height) {
        return { width: metadata.width, height: metadata.height };
      }
      return null;
    } catch {
      return null;
    }
  }
  
  /**
   * Verify image has reasonable dimensions (min 100x100, max 10000x10000)
   */
  static async verifyImageDimensions(filePath: string): Promise<{ valid: boolean; dimensions?: { width: number; height: number }; error?: string }> {
    const dimensions = await this.getImageDimensions(filePath);
    
    if (!dimensions) {
      return { valid: false, error: 'Unable to read image dimensions' };
    }
    
    const MIN_DIMENSION = 100;
    const MAX_DIMENSION = 10000;
    
    if (dimensions.width < MIN_DIMENSION || dimensions.height < MIN_DIMENSION) {
      return { 
        valid: false, 
        dimensions, 
        error: `Image too small (${dimensions.width}x${dimensions.height}, minimum ${MIN_DIMENSION}x${MIN_DIMENSION})` 
      };
    }
    
    if (dimensions.width > MAX_DIMENSION || dimensions.height > MAX_DIMENSION) {
      return { 
        valid: false, 
        dimensions, 
        error: `Image too large (${dimensions.width}x${dimensions.height}, maximum ${MAX_DIMENSION}x${MAX_DIMENSION})` 
      };
    }
    
    return { valid: true, dimensions };
  }
  
  /**
   * Verify image can be decoded (not corrupted)
   */
  static async verifyImageIntegrity(filePath: string): Promise<{ valid: boolean; error?: string }> {
    try {
      // Try to decode the image by converting to a buffer
      await sharp(filePath).toBuffer();
      return { valid: true };
    } catch (error) {
      return { valid: false, error: `Image is corrupted or cannot be decoded: ${error}` };
    }
  }
  
  /**
   * Verify filename is safe (no path traversal)
   */
  static verifyFilenameSafe(filename: string): { valid: boolean; error?: string } {
    const dangerous = ['..', '/', '\\', '\0', '<', '>', ':', '"', '|', '?', '*'];
    
    for (const char of dangerous) {
      if (filename.includes(char)) {
        return { valid: false, error: `Filename contains dangerous character: ${char}` };
      }
    }
    
    if (filename.length === 0) {
      return { valid: false, error: 'Filename is empty' };
    }
    
    if (filename.length > 255) {
      return { valid: false, error: `Filename too long (${filename.length} chars, max 255)` };
    }
    
    return { valid: true };
  }
  
  /**
   * COMPREHENSIVE VERIFICATION - All checks in one
   */
  static async verifyDownloadedWallpaper(filePath: string): Promise<{
    success: boolean;
    checks: {
      fileExists: boolean;
      fileSize: { valid: boolean; size: number; error?: string };
      imageFormat: { valid: boolean; format?: string; error?: string };
      imageDimensions: { valid: boolean; dimensions?: { width: number; height: number }; error?: string };
      imageIntegrity: { valid: boolean; error?: string };
      filenameSafe: { valid: boolean; error?: string };
    };
    errors: string[];
  }> {
    const errors: string[] = [];
    const filename = path.basename(filePath);
    
    // Check 1: File exists
    const fileExists = await this.verifyFileExists(filePath);
    if (!fileExists) {
      errors.push('File does not exist or is empty');
    }
    
    // Check 2: File size
    const fileSize = this.verifyFileSize(filePath);
    if (!fileSize.valid) {
      errors.push(fileSize.error || 'Invalid file size');
    }
    
    // Check 3: Image format
    const imageFormat = await this.verifyImageFormat(filePath);
    if (!imageFormat.valid) {
      errors.push(imageFormat.error || 'Invalid image format');
    }
    
    // Check 4: Image dimensions
    const imageDimensions = await this.verifyImageDimensions(filePath);
    if (!imageDimensions.valid) {
      errors.push(imageDimensions.error || 'Invalid image dimensions');
    }
    
    // Check 5: Image integrity
    const imageIntegrity = await this.verifyImageIntegrity(filePath);
    if (!imageIntegrity.valid) {
      errors.push(imageIntegrity.error || 'Image is corrupted');
    }
    
    // Check 6: Filename safety
    const filenameSafe = this.verifyFilenameSafe(filename);
    if (!filenameSafe.valid) {
      errors.push(filenameSafe.error || 'Unsafe filename');
    }
    
    return {
      success: errors.length === 0,
      checks: {
        fileExists,
        fileSize,
        imageFormat,
        imageDimensions,
        imageIntegrity,
        filenameSafe,
      },
      errors,
    };
  }
  
  /**
   * Format verification results for console output
   */
  static formatVerificationResults(results: Awaited<ReturnType<typeof DownloadVerification.verifyDownloadedWallpaper>>): string {
    const lines: string[] = [];
    lines.push('📋 Download Verification Results:');
    lines.push(`✅ Overall: ${results.success ? 'PASSED' : 'FAILED'}`);
    lines.push('');
    lines.push('Checks:');
    lines.push(`  ${results.checks.fileExists ? '✅' : '❌'} File exists`);
    lines.push(`  ${results.checks.fileSize.valid ? '✅' : '❌'} File size: ${(results.checks.fileSize.size / 1024).toFixed(2)} KB`);
    lines.push(`  ${results.checks.imageFormat.valid ? '✅' : '❌'} Image format: ${results.checks.imageFormat.format || 'unknown'}`);
    
    if (results.checks.imageDimensions.dimensions) {
      const { width, height } = results.checks.imageDimensions.dimensions;
      lines.push(`  ${results.checks.imageDimensions.valid ? '✅' : '❌'} Dimensions: ${width}x${height}`);
    } else {
      lines.push(`  ❌ Dimensions: unable to read`);
    }
    
    lines.push(`  ${results.checks.imageIntegrity.valid ? '✅' : '❌'} Image integrity`);
    lines.push(`  ${results.checks.filenameSafe.valid ? '✅' : '❌'} Filename safety`);
    
    if (results.errors.length > 0) {
      lines.push('');
      lines.push('❌ Errors:');
      results.errors.forEach(error => lines.push(`  - ${error}`));
    }
    
    return lines.join('\n');
  }
  
  /**
   * Clean up downloaded files after test
   */
  static cleanupDownloadedFile(filePath: string): void {
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (error) {
      console.warn(`Warning: Could not delete file ${filePath}:`, error);
    }
  }
}
