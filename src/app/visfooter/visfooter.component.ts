import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventData } from '../shared/models/event-data.model';
import { BroadcastService } from '../shared/services/broadcast.service';
import { VisUtilService } from '../shared/services/vis-util.service';

@Component({
  selector: 'visfooter',
  templateUrl: './visfooter.component.html',
  styleUrls: ['./visfooter.component.scss']
})
export class VisfooterComponent implements OnInit {

  public inputData: string;
  public searchingElement: string;
  // public currentSpeed: number = 1;
  constructor(private broadcastSvc: BroadcastService, private visUtilSvc: VisUtilService) { }

  ngOnInit(): void {
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

  changeSpeed(newSpeed: number) {
    this.visUtilSvc.setFactor(newSpeed);
    // this.currentSpeed = newSpeed == 2/3 ? 0.5 : newSpeed;
  }

  get currentSpeed() {
    return this.visUtilSvc.getFactor();
  }

}
