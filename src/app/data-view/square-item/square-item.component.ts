import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'square-item',
  templateUrl: './square-item.component.html',
  styleUrls: ['./square-item.component.scss']
})
export class SquareItemComponent implements OnInit {
  @Input() element: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
