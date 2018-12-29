import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  readFname: any;

  constructor() {
  }

  ngOnInit() {
    this.readFname = function() {
      const file = (<HTMLInputElement>document.getElementById('uploadFile')).files[0];
      if (file) {
        console.log(file.name);
        const fileLabel = document.getElementById('uploadFilename');
        const fileSizeStr = fileSizeCheck(file.size);
        fileLabel.innerHTML = file.name + ' | ' + fileSizeStr;
      } else {
        console.log('no file selected');
      }
    };

    function fileSizeCheck(inputFileSize) {
      let fileSize: number = inputFileSize;
      const sizeUnits = ['Bytes', 'KB', 'MB'];
      let starter = 0;
      while (fileSize < 1024) {
        fileSize = fileSize / 1024;
        starter += starter;
      }
      const returnString = fileSize + ' ' + sizeUnits[starter];
      return returnString;
    }
  }
}
