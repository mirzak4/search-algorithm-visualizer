import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visheader',
  templateUrl: './visheader.component.html',
  styleUrls: ['./visheader.component.scss']
})
export class VisheaderComponent implements OnInit {
public displayInfo: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public showAppInfo() {
    this.displayInfo = true;
  }

  public closeModal() {
    this.displayInfo = false;
  }

}
