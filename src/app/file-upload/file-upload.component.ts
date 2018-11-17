import { Component, OnInit, NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [FileUploadComponent],
  exports: [FileUploadComponent],
  imports: [MatFormFieldModule]
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
