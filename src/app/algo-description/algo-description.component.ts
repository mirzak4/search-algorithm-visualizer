import { Component, destroyPlatform, Input, OnDestroy, OnInit } from '@angular/core';
import { VisUtilService } from '../shared/services/vis-util.service';

@Component({
  selector: 'algo-description',
  templateUrl: './algo-description.component.html',
  styleUrls: ['./algo-description.component.scss']
})
export class AlgoDescriptionComponent implements OnInit {

  constructor(private visUtilSvc: VisUtilService) { }

  ngOnInit(): void {
  }

  public close() {
    this.visUtilSvc.algoDescVisible = false;
  }

  get algoTitle() {
    return this.visUtilSvc.algoTitle;
  }

  get algoContent() {
    return this.visUtilSvc.algoContent;
  }

}
