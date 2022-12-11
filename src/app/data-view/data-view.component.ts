import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { EventData } from '../shared/models/event-data.model';
import { SelectedAlgorithmOption } from '../shared/models/selected-algorithm.enum';
import { BlockUIService } from '../shared/services/block-ui.service';
import { BroadcastService } from '../shared/services/broadcast.service';
import { VisUtilService } from '../shared/services/vis-util.service';

@Component({
  selector: 'data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
  animations: [
    trigger('fadeInState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ])
  ]
})
export class DataViewComponent implements OnInit {
  public data: any[] = [];
  public position: any;
  public searchingElement?: number;
  public currentElement?: number;
  public relationSign?: string
  public showDataInsight: boolean = false;
  public showAlgoDesc: boolean = false;
  public selectedAlgorithm?: SelectedAlgorithmOption = 1;
  public displayDialog: boolean = false;
  public dialogStatements: string[] = [];

  constructor(private visUtilService: VisUtilService, private broadcastSvc: BroadcastService, private blockUI: BlockUIService) { }

  ngOnInit(): void {
    this.broadcastSvc.eventObservable.subscribe(eventData => {
      switch(eventData.eventName) {
        case 'linearSearch':
          this.scheduleLinearSearch(eventData.eventData);
          break;
        case 'binarySearch':
          this.scheduleBinarySearch(eventData.eventData);
          break;
        case 'generateData':
          this.generateData(eventData.eventData);
          break;
        case 'generateRandomData':
          this.generateRandomData();
          break;
        case 'sortData':
          this.sortData();
          break;
        case 'setDataInsightState':
          this.setDataInsightState(eventData.eventData);
          break;
      }
    });
  }

  async linearSearch(searchingElement: number) {
    if (!this.data.length) return;
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].isCurrent = true;
      this.currentElement = this.data[i].value;
      await this.visUtilService.algoSleep(1000);
      if (this.data[i].value == searchingElement) {
        this.relationSign = '&equals;';
        this.data[i].isMatch = true;
        this.broadcastSvc.broadcastEvent(
          new EventData('elementFound')
        );
        return;
      }
      this.relationSign = '&ne;';
      await this.visUtilService.algoSleep(1000);
      this.data[i].isCurrent = false;
    }
    this.broadcastSvc.broadcastEvent(
      new EventData('elementNotFound')
    );
  }

  async binarySearch(searchingElement: number) {
    let beg: number = 0;
    let end: number = this.data.length - 1;

    while (beg <= end) {
      this.data.forEach(element => {
        if (element.value < this.data[beg].value || element.value > this.data[end].value) {
          element.notInMatchingInterval = true;
        }
      });

      await this.visUtilService.algoSleep(500);

      const mid: number = Math.floor((beg + end) / 2);
      this.data[mid].isCurrent = true;
      this.currentElement = this.data[mid].value;
      await this.visUtilService.algoSleep(500);

      if (this.data[mid].value == searchingElement) {
        this.relationSign = '&equals;';
        this.data[mid].isMatch = true;
        this.broadcastSvc.broadcastEvent(
          new EventData('elementFound')
        );
        break;
      }
      else if (this.data[mid].value > searchingElement) {
        this.relationSign = '&gt;';
        end = mid - 1;
      }
      else {
        this.relationSign = '&lt;'
        beg = mid + 1;
      }
      await this.visUtilService.algoSleep(1000);
      this.data[mid].isCurrent = false;
    }
    if (beg > end) {
      this.data.forEach(el => {
        el.notInMatchingInterval = true;
        this.broadcastSvc.broadcastEvent(
          new EventData('elementNotFound')
        );
      });
    }
  }

  async generateData(inputData: string) {
    this.blockUI.start("Generating data...");
    await this.visUtilService.sleep(500);
    this.resetAllFields();
    await this.visUtilService.sleep(1500);
    this.data = this.visUtilService.generateData(inputData);
    if (!this.data.length) {
      this.dialogStatements = ["You must enter valid format of data in order to execute algorithm."];
      this.displayDialog = true;
    }
    this.blockUI.stop();
  }

  async generateRandomData() {
    this.blockUI.start("Generating random data...");
    await this.visUtilService.sleep(500);
    this.resetAllFields();
    await this.visUtilService.sleep(1500);
    this.data = this.visUtilService.generateRandomData();
    this.blockUI.stop();
  }

  async sortData() {
    this.blockUI.start("Sorting data...");
    await this.visUtilService.sleep(2000);
    this.data.sort((a,b) => {
      let first = a.value;
      let second = b.value;
      return first > second ? 1 : second > first ? -1 : 0;
    });
    this.blockUI.stop();
  }

  changePosition(newPos: string) {
    this.position = newPos;
  }

  private resetAllFields() {
    this.broadcastSvc.broadcastEvent(new EventData(
      'newSearchingValue',
      undefined
    ));
    this.visUtilService.setFactor(1);
    this.broadcastSvc.broadcastEvent(
      new EventData('resetInsight')
    );
    this.setDataInsightState(false);
    this.visUtilService.algoDescVisible = false;
    this.currentElement = undefined;
    this.relationSign = undefined;
    this.selectedAlgorithm = undefined;
  }

  get dataInsightState() {
    return this.showDataInsight ? 'show': 'hide';
  }

  get algoDescVisible() {
    return this.visUtilService.algoDescVisible
  }

  private setDataInsightState(newState: boolean) {
    this.showDataInsight = newState;
  }

  async algorithmStart() {
    let element = this.searchingElement as number;
    await this.visUtilService.sleep(1000);
    switch (this.selectedAlgorithm) {
      case 1:
        this.linearSearch(element);
        break;
      case 2:
        this.binarySearch(element);
        break;
    }
  }

  scheduleLinearSearch(searchingElement: number) {
    if (!this.preAlgorithmValidation(searchingElement, 1)) {
      return;
    }
    this.setDataInsightState(true);
    this.visUtilService.algoDescVisible = true;
    this.visUtilService.setAlgoDescriptionInfo(1);
    this.selectedAlgorithm = 1;
    this.searchingElement = searchingElement;
  }

  scheduleBinarySearch(searchingElement: number) {
    if (!this.preAlgorithmValidation(searchingElement, 2)) {
      return;
    }
    this.setDataInsightState(true);
    this.visUtilService.algoDescVisible = true;
    this.visUtilService.setAlgoDescriptionInfo(2);
    this.selectedAlgorithm = 2;
    this.searchingElement = searchingElement;
  }

  preAlgorithmValidation(searchingElement: number, selectedAlgorithm: SelectedAlgorithmOption) {
    this.dialogStatements = [];
    if (!this.visUtilService.isDefined(searchingElement) || (selectedAlgorithm == 2 && !this.visUtilService.isDataSorted(this.data))) {
      if (!this.visUtilService.isDefined(searchingElement)) {
        this.dialogStatements.push("Searching element must be entered in order to execute algorithm.");
      }
      if ((selectedAlgorithm == 2 && !this.visUtilService.isDataSorted(this.data))) {
        this.dialogStatements.push("Data must be sorted in order to execute Binary Search.");
      }
      this.displayDialog = true;
      return false;
    }
    return true;
  }

}
