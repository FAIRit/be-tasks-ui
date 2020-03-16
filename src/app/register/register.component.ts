import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ParentService} from "../_service/parent.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private parentService: ParentService,
              private router: Router) {
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const name = this.registrationForm.controls.name.value;
    const gender = this.registrationForm.controls.gender.value;
    const email = this.registrationForm.controls.email.value;
    const password = this.registrationForm.controls.password.value;
    (this.parentService.addParent(name, gender, email, password).subscribe(
        data => {
          window.alert('SUCCESS');
          this.router.navigate(['/login'])
        },
        error => {
          window.alert('ERROR')
        }
      )
    );
  }
}
