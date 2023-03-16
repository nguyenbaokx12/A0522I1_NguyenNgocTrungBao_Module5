import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  colorNew: String = "purple";
  color2: String;

  constructor() { }

  ngOnInit(): void {
  }

  color(color: String){
    switch(color){
      case "primary": this.colorNew = "blue"
      break;
      case "success": this.colorNew = "green"
      break;
      case "danger": this.colorNew = "red"
      break;
      case "warning": this.colorNew = "yellow"
      break;
      case "light": this.colorNew = "white"
      break;
    }
  }
}
