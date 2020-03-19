import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChildService} from "../_service/child.service";
import {AuthenticationService} from "../_service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.css']
})
export class AddChildComponent implements OnInit {
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private childService: ChildService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const name = this.addForm.controls.name.value;
    const gender = this.addForm.controls.gender.value;
    const birthDate = this.addForm.controls.birthDate.value;
    const email = this.addForm.controls.email.value;
    const password = this.addForm.controls.password.value;
    (this.childService.addChild(name, gender, birthDate, email, password).subscribe(
        data => {
          window.alert('SUCCESS');
          this.router.navigate(['/parents'])
        },
        error => {
          window.alert('ERROR')
        }
      )
    );
  }
}
