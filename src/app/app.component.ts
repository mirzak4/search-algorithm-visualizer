import { Component } from '@angular/core';
import { BlockUIService } from './shared/services/block-ui.service';
import { VisUtilService } from './shared/services/vis-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'search-algorithm-visualizer';
  constructor() {
  }
}
