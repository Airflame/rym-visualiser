import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearDifferenceChartComponent } from './year-difference-chart.component';

describe('YearDifferenceChartComponent', () => {
  let component: YearDifferenceChartComponent;
  let fixture: ComponentFixture<YearDifferenceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearDifferenceChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearDifferenceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
