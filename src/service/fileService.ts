class FileService {
  static getFileExtension(fileName: string): string {
    const fileNames: Array<string> = fileName.split('.');

    if (fileNames.length === 0) {
      return '';
    }

    return fileNames[fileNames.length - 1];
  }
}

export default FileService;
