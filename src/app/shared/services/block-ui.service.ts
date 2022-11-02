import { Injectable } from '@angular/core';
import { BlockUI } from '../models/block-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BlockUIService {
  private blockUIModel = new BlockUI();

  constructor() { }

  start(message: string) {
    this.blockUIModel.message = message;
    this.blockUIModel.isActive = true;
  }

  stop() {
    this.blockUIModel.isActive = false;
  }

  get blockUI() {
    return this.blockUIModel;
  }
}
