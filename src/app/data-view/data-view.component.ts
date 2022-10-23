import { state, style, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { BroadcastService } from '../shared/services/broadcast.service';
import { VisUtilService } from '../shared/services/vis-util.service';

@Component({
  selector: 'data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
  // animations: [
  //   trigger('elementState', [
  //     state('move', style({
  //       transform: 'translateY(50px)'
  //     }))
  //   ])
  // ]
})
export class DataViewComponent implements OnInit {
  public data: any[] = [];
  public position: any;

  constructor(private visUtilService: VisUtilService, private broadcastSvc: BroadcastService) { }

  ngOnInit(): void {
    this.broadcastSvc.eventObservable.subscribe(eventData => {
      switch(eventData.eventName) {
        case 'linearSearch':
          this.linearSearch(eventData.eventData);
          break;
        case 'binarySearch':
          this.binarySearch(eventData.eventData);
          break;
        case 'generateData':
          this.generateData(eventData.eventData);
          break;
        case 'generateRandomData':
          this.generateRandomData();
          break;
      }
    });
  }

  async linearSearch(searchingElement: number) {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].isCurrent = true;
      await this.visUtilService.sleep(1000);
      if (this.data[i].value == searchingElement) {
        this.data[i].isMatch = true;
        break;
      }
      this.data[i].isCurrent = false;
    }
  }

  async binarySearch(searchingElement: number) {
    let beg: number = 0;
    let end: number = this.data.length - 1;

    while (beg <= end) {
      const mid: number = Math.floor((beg + end) / 2);
      this.data[mid].isCurrent = true;
      await this.visUtilService.sleep(1000);

      if (this.data[mid].value === searchingElement) {
        this.data[mid].isMatch = true;
        break;
      }
      this.data.forEach(element => {
        if (searchingElement < this.data[mid].value) {
          if (element.value < this.data[mid].value) {
            element.inMatchingInterval = true;
          }
          else {
            element.notInMatchingInterval = true;
          }
          end = mid - 1;
        }
        else {
          if (element.value > this.data[mid].value) {
            element.inMatchingInterval = true;
          }
          else {
            element.notInMatchingInterval = true;
          }
          beg = mid + 1;
        }
      });
      this.data[mid].isCurrent = false;
    }
  }

  

  async generateData(inputData: string) {
    this.data = this.visUtilService.generateData(inputData);
  }

  async generateRandomData() {
    this.data = this.visUtilService.generateRandomData();
  }

  changePosition(newPos: string) {
    this.position = newPos;
  }

}
