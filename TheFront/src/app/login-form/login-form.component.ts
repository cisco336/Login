import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fade } from '../animations/animations';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  animations: [ fade ]
})
export class LoginFormComponent implements OnInit {
  @Input() animState: string;
  formLogin: FormGroup;
  _registerFormValue: JSON;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      emailLog: ['', [Validators.required, Validators.email]],
      passwdLog: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit() {
    if (this.animState === 'Register') {
      const finalJson = {
        ...this._registerFormValue,
        ...this.formLogin.value
      };
      return;
    }
  }
  registerFormValue($event) {
    this._registerFormValue = $event;
  }
}
