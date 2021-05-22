import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent implements OnInit {
  value: any = '';
  value1: any = '';
  total: any = '';
  constructor() { }

  ngOnInit(): void {
  }
  calculateBmi() {
    if (!(this.value == '' && this.value1 == '')) {
      let bmi = (this.value1 / (this.value *this.value)) * 10000;
      this.total = bmi.toFixed(2);
    }
  }

}
