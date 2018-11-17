import { Component, OnInit, NgModule } from '@angular/core';
import { FileUploadComponent } from "../file-upload/file-upload.component";

@NgModule({
  declarations: [DinnerOptionsComponent],
  imports: [FileUploadComponent],
  exports: [FileUploadComponent]
})
@Component({
  selector: 'app-dinner-options',
  templateUrl: './dinner-options.component.html',
  styleUrls: ['./dinner-options.component.scss']
})
export class DinnerOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
