import {Component, OnInit} from '@angular/core';
import {ParentService} from '../_service/parent.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-parent',
  templateUrl: './update-parent.component.html',
  styleUrls: ['./update-parent.component.css']
})
export class UpdateParentComponent implements OnInit {

  updateForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private parentService: ParentService,
              private router: Router) {
  }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      password: ['']
    });
    this.parentService.getParent().subscribe(parentData => {
        this.updateForm.setValue({
          name: parentData.name,
          gender: parentData.gender,
          email: parentData.email,
          password: ''
        });
      },
      error => {
      })
  }

  onSubmit() {
    const name = this.updateForm.controls.name.value;
    const gender = this.updateForm.controls.gender.value;
    const email = this.updateForm.controls.email.value;
    const password = this.updateForm.controls.password.value;

    (this.parentService.updateParent(name, gender, email, password).subscribe(
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
