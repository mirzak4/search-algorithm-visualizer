import { Component, OnInit } from '@angular/core';
import { BlockUIService } from '../shared/services/block-ui.service';

@Component({
  selector: 'block-ui',
  templateUrl: './block-ui.component.html',
  styleUrls: ['./block-ui.component.scss']
})
export class BlockUiComponent implements OnInit {
display = true;
  constructor(private blockUISvc: BlockUIService) { }

  ngOnInit(): void {
  }

  get blockUI() {
    return this.blockUISvc.blockUI.isActive;
  }

  get blockUIMessage() {
    return this.blockUISvc.blockUI.message;
  }

}
