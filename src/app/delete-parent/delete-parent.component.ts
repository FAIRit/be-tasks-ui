import {Component, OnInit} from '@angular/core';
import {ParentService} from "../_service/parent.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-parent',
  templateUrl: './delete-parent.component.html',
  styleUrls: ['./delete-parent.component.css']
})
export class DeleteParentComponent implements OnInit {

  constructor(private parentService: ParentService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.parentService.deleteParent().subscribe(data => {
        window.alert('SUCCESS');
        this.router.navigate(['/login'])
      },
      error => {
        window.alert('ERROR')
      }
    )
  }
}
