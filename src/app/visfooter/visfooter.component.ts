import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventData } from '../shared/models/event-data.model';
import { BroadcastService } from '../shared/services/broadcast.service';

@Component({
  selector: 'visfooter',
  templateUrl: './visfooter.component.html',
  styleUrls: ['./visfooter.component.scss']
})
export class VisfooterComponent implements OnInit {

  public inputData: string;
  public searchingElement: string;
  constructor(private broadcastSvc: BroadcastService) { }

  ngOnInit(): void {
  }

  linearSearch() {
    this.broadcastSvc.broadcastEvent(
      new EventData(
        'linearSearch',
        Number.parseInt(this.searchingElement)
      )
    );
  }

  binarySearch() {
    this.broadcastSvc.broadcastEvent(
      new EventData(
        'binarySearch',
        Number.parseInt(this.searchingElement)
      )
    );
  }

  generateData() {
    this.broadcastSvc.broadcastEvent(
      new EventData(
        'generateData',
        this.inputData
      )
    );
  }

  generateRandomData() {
    this.broadcastSvc.broadcastEvent(
      new EventData(
        'generateRandomData'
      )
    );
  }

  sortData() {
    this.broadcastSvc.broadcastEvent(
      new EventData(
        'sortData'
      )
    );
  }

}
