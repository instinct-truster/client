class DocumentFileSizeValidator {
  private fileSizeInBytes: Number;
  private maxFileSizeInBytes: Number = 20971520; // 20MB

  constructor(fileSize: Number) {
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
