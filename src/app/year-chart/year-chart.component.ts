import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year-chart',
  templateUrl: './year-chart.component.html',
  styleUrls: ['./year-chart.component.scss']
})
export class YearChartComponent implements OnInit {

  constructor() { }

  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public chartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public chartLegend = true;
  public chartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  ];

  ngOnInit(): void {
  }

}
