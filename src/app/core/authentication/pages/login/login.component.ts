import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private route: Router, private formBuilder: FormBuilder) {}

  public submitLogin() {
    if (this.loginForm.invalid) {
      return
    }

    this.route.navigate(['/conta-corrente'])
  }
}
