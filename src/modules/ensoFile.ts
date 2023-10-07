```typescript
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faFile, faImage, faFileExcel, faFilePdf, faFileWord, faFilePowerpoint,
} from '@fortawesome/free-solid-svg-icons';

const Images: string[] = ['jpg', 'png', 'jpeg', 'gif'];
const SpreadSheets: string[] = ['xls', 'xlsx', 'csv', 'numbers'];
const Documents: string[] = ['doc', 'docx', 'pages'];
const Ppts: string[] = ['ppt', 'pptx', 'key'];
const Pdfs: string[] = ['pdf'];

library.add(faFile, faImage, faFileExcel, faFilePdf, faFileWord, faFilePowerpoint);

/**
 * Represents a file with its extension.
 */
class EnsoFile {
  private _extension: string;

  /**
   * Constructs a new EnsoFile object with the provided file.
   * @param file - The file object containing the extension.
   */
  constructor(file: { extension: string }) {
    this._extension = file.extension.toLowerCase();
  }

  /**
   * Returns the extension of the file.
   * @returns The extension of the file.
   */
  extension(): string {
    return this._extension;
  }

  /**
   * Checks if the file is an image based on its extension.
   * @returns True if the file is an image, false otherwise.
   */
  isImage(): boolean {
    return Images.includes(this.extension());
  }

  /**
   * Checks if the file is a PDF based on its extension.
   * @returns True if the file is a PDF, false otherwise.
   */
  isPdf(): boolean {
    return Pdfs.includes(this.extension());
  }

  /**
   * Checks if the file is viewable (image or PDF).
   * @returns True if the file is viewable, false otherwise.
   */
  isViewable(): boolean {
    return this.isImage() || this.isPdf();
  }

  /**
   * Returns the icon for the file based on its extension.
   * @returns The corresponding FontAwesome icon for the file.
   */
  icon(): IconDefinition {
    if (this.isImage()) {
      return faImage;
    }

    if (this.isPdf()) {
      return faFilePdf;
    }

    if (SpreadSheets.includes(this.extension())) {
      return faFileExcel;
    }

    if (Documents.includes(this.extension())) {
      return faFileWord;
    }

    if (Ppts.includes(this.extension())) {
      return faFilePowerpoint;
    }

    return faFile;
  }
}

export default EnsoFile;
```