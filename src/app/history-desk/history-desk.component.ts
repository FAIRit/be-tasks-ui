import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HistoryService, History} from "../_service/history.service";

@Component({
  selector: 'app-history-desk',
  templateUrl: './history-desk.component.html',
  styleUrls: ['./history-desk.component.css']
})
export class HistoryDeskComponent implements OnInit {

  childId: string;
  historyList: Array<History>;

  constructor(private route: ActivatedRoute,
              private historyService: HistoryService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.childId = params['childId'];
    })
    this.historyService.getHistory(this.childId).subscribe(data => {
      this.historyList = data;
    })
  }
}
