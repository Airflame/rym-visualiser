import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataImportService {

  constructor() { }

  convert(text: string) {
    console.log(text);
  }
}
