import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { VisUtilService } from '../shared/services/vis-util.service';

@Component({
  selector: 'data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {
  public data = [
    {
      "value": 1,
      "isCurrent": false,
      "isMatch": false
    },
    {
      "value": 123,
      "isCurrent": false,
      "isMatch": false
    },
    {
      "value": 45,
      "isCurrent": false,
      "isMatch": false
    },
    {
      "value": 6,
      "isCurrent": false,
      "isMatch": false
    },    {
      "value": 28,
      "isCurrent": false,
      "isMatch": false
    }
    ,    {
      "value": 435,
      "isCurrent": false,
      "isMatch": false
    }
  ];

  public inputData = "1,2,3,4,5,6,7,8,9,10"
  public searchingElement: number;

  constructor(private visUtilService: VisUtilService) { }

  ngOnInit(): void {
  }

  async linearSearch() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].isCurrent = true;
      await this.visUtilService.sleep(1000);
      if (this.data[i].value == this.searchingElement) {
        this.data[i].isMatch = true;
        break;
      }
      this.data[i].isCurrent = false;
    }
  }

  async generateData() {
    this.data = this.visUtilService.generateData(this.inputData);
  }

  async generateRandomData() {
    this.data = this.visUtilService.generateRandomData();
  }

}
