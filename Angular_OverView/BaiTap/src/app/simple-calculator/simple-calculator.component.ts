import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.css']
})
export class SimpleCalculatorComponent implements OnInit {

  number1: number = 2;
  number2: number = 2;
  result: number;
  
  constructor() { }

  ngOnInit(): void {
  }


  calculator(element: string) {
    switch (element) {
      case "+":
        this.result = this.number1 + this.number2;
        break;
      case "-":
        this.result = this.number1 - this.number2;
        break;
      case "*":
        this.result = this.number1 * this.number2;
        break;
      case "/":
        this.result = this.number1 / this.number2;
        break;
    }
  }


}
