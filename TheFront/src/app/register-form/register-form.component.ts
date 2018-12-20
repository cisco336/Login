import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fade } from '../animations/animations';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  animations: [fade]
})
export class RegisterFormComponent implements OnInit {
  @Input() animState: string;
  @Output() formValue = new EventEmitter<JSON>();
  formRegister: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      nameReg: ['', Validators.required],
      lastNameReg: ['', Validators.required]
    });
  }

  emition() {
    this.formValue.emit(this.formRegister.value);
  }
}
