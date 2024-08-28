export interface UploadFileResponse {
  success: boolean;
  message: string;
}

class FileService {
  private file: File;
  private fileSessionId: number = 0;
  private fileName: string = '';
  private totalFileBlocks: number = 0;
  private maxFileBlockSize: number = 20971520; //20MB
  private fileBlockCount: number = 0;

  private startBlock: number = 0;
  private endBlock: number = 0;

  constructor(file: File) {
    this.file = file;
    this.setTotalFileBlocks();
  }

  static getFileExtension(fileName: string): string {
    const fileNames: Array<string> = fileName.split('.');

    if (fileNames.length === 0) {
      return '';
    }

    return fileNames[fileNames.length - 1];
  }

  private setTotalFileBlocks() {
    this.totalFileBlocks = this.file.size / this.maxFileBlockSize;
  }

  async createFileUploadSession(): Promise<{ success: boolean; message?: string }> {
    const fileSessionResponse = await fetch('http://localhost:5000/createFileUploadSession', {
      method: 'POST',
      body: this.getFileSessionDetails(),
    });

    const responseJson = await fileSessionResponse.json();

    if (responseJson.success === false) {
      return {
        success: false,
        message: responseJson.message,
      };
    }

    this.fileSessionId = responseJson.fileSessionId;
    this.fileName = responseJson.fileName;

    return {
      success: true,
    };
  }

  async uploadFile(): Promise<UploadFileResponse> {
    const uploadResponse = await fetch('http://localhost:5000/uploadFile', {
      method: 'POST',
      body: this.getFormData(),
    });

    const responseJson = await uploadResponse.json();

    if (responseJson.success === false) {
      return {
        success: false,
        message: responseJson.message,
      };
    }

    return {
      success: true,
      message: 'Uploaded Successfully',
    };
  }

  private getFileSessionDetails(): FormData {
    const formData = new FormData();
    formData.append('fileName', this.file.name);
    formData.append('fileSize', this.file.size.toString());

    return formData;
  }

  private getFormData(): FormData {
    const formData = new FormData();
    formData.append('file', this.file);
    return formData;
  }
}

export default FileService;
