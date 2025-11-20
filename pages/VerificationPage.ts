import * as fs from 'fs';
import * as path from 'path';
import { DownloadVerification } from '../tests/helpers/DownloadVerification';

class VerificationPage {
  private downloadedFilePath: string = '';
  
  setDownloadedFile(filePath: string) {
    this.downloadedFilePath = filePath;
  }
  
  async getMostRecentDownload(downloadsDir: string): Promise<string> {
    if (!fs.existsSync(downloadsDir)) {
      throw new Error(`Downloads directory does not exist: ${downloadsDir}`);
    }
    
    const files = fs.readdirSync(downloadsDir);
    
    if (files.length === 0) {
      throw new Error(`No files found in downloads directory: ${downloadsDir}`);
    }
    
    const filesWithStats = files.map(file => ({
      name: file,
      path: path.join(downloadsDir, file),
      mtime: fs.statSync(path.join(downloadsDir, file)).mtime
    }));
    
    filesWithStats.sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
    
    const mostRecent = filesWithStats[0].path;
    this.setDownloadedFile(mostRecent);
    return mostRecent;
  }
  
  async verifyFileDownloaded(downloadsDir: string) {
    await this.getMostRecentDownload(downloadsDir);
  }
  
  async verifyFileSize() {
    if (!this.downloadedFilePath) {
      throw new Error('No downloaded file to verify');
    }
    
    const stats = fs.statSync(this.downloadedFilePath);
    const fileSizeKB = (stats.size / 1024).toFixed(2);
    
    console.log(`Downloaded file: ${path.basename(this.downloadedFilePath)}`);
    console.log(`File size: ${fileSizeKB} KB`);
    
    if (stats.size === 0) {
      throw new Error('Downloaded file is empty (0 bytes)');
    }
    
    if (stats.size < 1024) {
      throw new Error(`File too small (${stats.size} bytes) - likely not a valid wallpaper`);
    }
  }
  
  async verifyImageFormat() {
    const result = await DownloadVerification.verifyImageFormat(this.downloadedFilePath);
    
    if (!result.valid) {
      throw new Error(`Invalid image format: ${result.error}`);
    }
  }
  
  async verifyImageDimensions() {
    const result = await DownloadVerification.verifyImageDimensions(this.downloadedFilePath);
    
    if (!result.valid) {
      throw new Error(`Invalid dimensions: ${result.error}`);
    }
    
    if (result.dimensions) {
      console.log(`Image dimensions: ${result.dimensions.width}x${result.dimensions.height}`);
      
      if (result.dimensions.width < 100 || result.dimensions.height < 100) {
        throw new Error(`Dimensions too small (${result.dimensions.width}x${result.dimensions.height}) - not a wallpaper`);
      }
    }
  }
  
  async verifyFilenameSafety() {
    const fileName = path.basename(this.downloadedFilePath);
    const result = DownloadVerification.verifyFilenameSafe(fileName);
    
    if (!result.valid) {
      throw new Error(`Unsafe filename: ${result.error}`);
    }
  }
  
  async verifyFormatInList(formats: string) {
    const allowedFormats = formats.split(',').map(f => f.trim().toLowerCase());
    const result = await DownloadVerification.verifyImageFormat(this.downloadedFilePath);
    
    if (!result.valid) {
      throw new Error(`Invalid image: ${result.error}`);
    }
    
    if (!allowedFormats.includes(result.format || '')) {
      throw new Error(`Format ${result.format} not in allowed list: ${formats}`);
    }
  }
  
  async verifyImageDecodable() {
    const result = await DownloadVerification.verifyImageIntegrity(this.downloadedFilePath);
    
    if (!result.valid) {
      throw new Error(`Image cannot be decoded: ${result.error}`);
    }
  }
  
  async verifyMinimumDimensions(minWidth: number, minHeight: number) {
    const result = await DownloadVerification.verifyImageDimensions(this.downloadedFilePath);
    
    if (!result.valid) {
      throw new Error(`Cannot verify dimensions: ${result.error}`);
    }
    
    const dims = result.dimensions!;
    if (dims.width < minWidth || dims.height < minHeight) {
      throw new Error(`Dimensions ${dims.width}x${dims.height} are below minimum ${minWidth}x${minHeight}`);
    }
  }
}

export = new VerificationPage();
