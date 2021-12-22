import { Component, OnInit } from '@angular/core';
import {MathService} from '../../math.service';
import {IntegerService} from '../../integer.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  ceiling = '23.42';
  round = '434.444223';
  floor = 'abc43232';
  arrInt = [12, '94.23'];
  regInt = '213....32';
  a = 0.23;
  b = 3.1;

  constructor(private mathService: MathService,
              private integerService: IntegerService) { }

  ngOnInit() {
    this.mathService.ceil(this.ceiling);
    this.mathService.round(this.round);
    this.mathService.floor(this.floor);

    this.integerService.getInt(this.arrInt);
    this.integerService.getNumber(this.regInt);
    this.integerService.getFloat(this.a, this.b);
  }


}
