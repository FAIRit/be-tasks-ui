import {Component, OnInit} from '@angular/core';
import {Child, ChildService} from "../_service/child.service";

@Component({
  selector: 'app-parent-desc',
  templateUrl: './parent-desk.component.html',
  styleUrls: ['./parent-desk.component.css']
})
export class ParentDeskComponent implements OnInit {

  constructor(private childService: ChildService) {
  }

  children: Array<Child>;

  ngOnInit(): void {
    this.childService.getChildren().subscribe(children => {
      this.children = children;
    })
  }
}
