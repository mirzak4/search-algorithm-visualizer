import { Component, Input, OnInit } from '@angular/core';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';

@Component({
  selector: 'data-insight',
  templateUrl: './data-insight.component.html',
  styleUrls: ['./data-insight.component.scss', '../data-top-row/data-top-row.component.scss', '../data-view.component.scss'],
})
export class DataInsightComponent implements OnInit {
  public searchingElement?: number;
  public show = false;
  public isFound = false;
  public isNotFound = false;
  @Input('currentElement') currentElement?: number;
  @Input('relationSign') relationSign?: string;

  constructor(private broadcastSvc: BroadcastService) { }

  ngOnInit(): void {
    this.broadcastSvc.eventObservable.subscribe(eventData =>   {
      switch (eventData.eventName) {
        case 'newSearchingValue':
          this.searchingElement = eventData.eventData;
          break;
        case 'resetInsight':
          this.isFound = false;
          this.isNotFound = false;
          break;
        case 'elementFound':
          this.isFound = true;
          break;
        case 'elementNotFound':
          this.isNotFound = true;
          break; 
      }
    });
  }

}
