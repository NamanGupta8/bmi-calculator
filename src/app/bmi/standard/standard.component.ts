import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent implements OnInit {
  value:any = '';
  value1:any = '';
  total:any = '';
  constructor() { }

  ngOnInit(): void {

  }
  calculateBmi() {
    if (!(this.value == '' && this.value1 == '')) {
      let bmi = (this.value1 / (this.value *this.value)) * 703;
      this.total = bmi.toFixed(2);
    }
  }

}
