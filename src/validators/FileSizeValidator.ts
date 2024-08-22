class FileSizeValidator {
  private fileSizeInBytes: number;
  private maxFileSizeInBytes: number = 2147483648; // 2GB

  constructor(fileSize: number) {
    this.fileSizeInBytes = fileSize;
  }

  validateFileSize(): boolean {
    return this.fileSizeInBytes <= this.maxFileSizeInBytes;
  }

  getErrorMessage(): string {
    return 'Maximum file size is 2GB';
  }
}

export default FileSizeValidator;
