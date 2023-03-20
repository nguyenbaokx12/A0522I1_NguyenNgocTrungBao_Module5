import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  @Output()
  eventEmmit = new EventEmitter;

  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.min(18), Validators.required]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[/^\+84\d{9,10}$/]')])
    });
   }

  ngOnInit(): void {
  }

  onClick() {
    if(this.registerForm.valid){
      this.eventEmmit.emit(this.registerForm.value);
    }
  }
}
