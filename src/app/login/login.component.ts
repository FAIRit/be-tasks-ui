import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_service/authentication.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;

    (this.authenticationService.login(username, password).subscribe(
        data => {
          if (data.type == "PARENT") {
            this.router.navigate(['/parents'])
          } else if (data.type == "CHILD") {
            this.router.navigate(['/child'])
          }
        },
        error => {
        }
      )
    );
  }
}
