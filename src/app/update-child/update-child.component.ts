import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChildService} from "../_service/child.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-child',
  templateUrl: './update-child.component.html',
  styleUrls: ['./update-child.component.css']
})
export class UpdateChildComponent implements OnInit {
  id: string;
  updateForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private childService: ChildService) {
  }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      birthDate: ['', Validators.required],
      password: ['']
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.childService.getChild(this.id).subscribe(childData => {
          this.updateForm.setValue({
            name: childData.name,
            gender: childData.gender,
            birthDate: childData.birthDate,
            email: childData.email,
            password: ''
          });
        },
        error => {
        })
    });
  }

  onSubmit() {
    const name = this.updateForm.controls.name.value;
    const gender = this.updateForm.controls.gender.value;
    const birthDate = this.updateForm.controls.birthDate.value;
    const email = this.updateForm.controls.email.value;
    const password = this.updateForm.controls.password.value;

    (this.childService.updateChild(this.id, name, gender, birthDate, email, password).subscribe(
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
