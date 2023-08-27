import { Component } from '@angular/core';
import { DataImportService } from './data-import.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rym-visualiser';
  file: File = {} as File;

  constructor(private dataImportService: DataImportService) {

  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    console.log(this.file);
    var reader = new FileReader();
    reader.onload = (e: any) => {
      this.dataImportService.convert(e.target.result);
    };
    reader.readAsText(this.file);
  }
}
