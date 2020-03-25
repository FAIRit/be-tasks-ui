import {Component, OnInit} from '@angular/core';
import {ChildService} from "../_service/child.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-child',
  templateUrl: './delete-child.component.html',
  styleUrls: ['./delete-child.component.css']
})
export class DeleteChildComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private childService: ChildService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.childService.deleteChild(this.id).subscribe(
        data => {
          window.alert('SUCCESS');
          this.router.navigate(['/parents'])
        },
        error => {
          window.alert('ERROR')
        }
      )
    })
  }
}
