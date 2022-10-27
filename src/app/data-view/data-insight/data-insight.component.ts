import { animate, state, style, transition, trigger } from '@angular/animations';
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
  @Input('currentElement') currentElement?: number;
  @Input('relationSign') relationSign?: string;

  constructor(private broadcastSvc: BroadcastService) { }

  ngOnInit(): void {
    this.broadcastSvc.eventObservable.subscribe(eventData =>   {
      if (eventData.eventName == 'newSearchingValue') {
        this.searchingElement = eventData.eventData;
      }
    });
  }

}
