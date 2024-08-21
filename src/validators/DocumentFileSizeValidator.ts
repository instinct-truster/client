class DocumentFileSizeValidator {
  private fileSizeInBytes: number;
  private maxFileSizeInBytes: number = 20971520; // 20MB

  constructor(fileSize: number) {
    this.fileSizeInBytes = fileSize;
  }

  validateFileSize(): boolean {
    return this.fileSizeInBytes <= this.maxFileSizeInBytes;
  }

  getErrorMessage(): string {
    return 'Maximum file size is 20MB';
  }
}

export default DocumentFileSizeValidator;
