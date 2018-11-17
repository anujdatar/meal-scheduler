import { Component, OnInit, NgModule } from '@angular/core';

@NgModule({
  declarations: [FileUploadComponent],
  exports: [FileUploadComponent]
})

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
