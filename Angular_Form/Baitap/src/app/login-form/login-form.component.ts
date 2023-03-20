import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Output()
  eventEmmit = new EventEmitter;

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.pattern('[[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)])
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.eventEmmit.emit(this.loginForm.value)
    }
  }
}
