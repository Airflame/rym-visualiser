import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataImportService {

  quantityByYear: number[] = new Array<number>(74).fill(0);
  quantityDifferenceByYear: number[] = new Array<number>(74).fill(0);

  quantityByYear$: Subject<number[]> = new Subject<number[]>;
  quantityDifferenceByYear$: Subject<number[]> = new Subject<number[]>;

  constructor() { }

  convert(text: string) {
    this.quantityByYear = new Array<number>(74).fill(0);
    let lines: string[] = text.split("\n").slice(1);
    lines.forEach(line => {
      let year: number = Number(line.split("\",\"")[6]);
      if (year >= 1950 && year <= 2023) {
        this.quantityByYear[Number(line.split("\",\"")[6]) - 1950]++;
      }
    });
    for (let i = 1; i <= this.quantityByYear.length; i++) {
      this.quantityDifferenceByYear[i] = this.quantityByYear[i] - this.quantityByYear[i - 1];
    }
    this.quantityByYear$.next(this.quantityByYear);
    this.quantityDifferenceByYear$.next(this.quantityDifferenceByYear);
  }
}
