import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'data-insight',
  templateUrl: './data-insight.component.html',
  styleUrls: ['./data-insight.component.scss', '../data-top-row/data-top-row.component.scss', '../data-view.component.scss']
})
export class DataInsightComponent implements OnInit {
  @Input('searchingElement') searchingElement: number;
  @Input('currentElement') currentElement: number;

  constructor() { }

  ngOnInit(): void {
  }

}
