import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventData } from 'src/app/shared/models/event-data.model';
import { SelectedAlgorithmOption } from 'src/app/shared/models/selected-algorithm.enum';
import { AlgPipe } from 'src/app/shared/pipes/alg.pipe';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';

@Component({
  selector: 'data-top-row',
  templateUrl: './data-top-row.component.html',
  styleUrls: ['./data-top-row.component.scss']
})
export class DataTopRowComponent implements OnInit {
  public selectedAlgorithm: SelectedAlgorithmOption = 1;
  public searchingElement: number;
  @Output('onNewSearchingValue') searchingElementEmitter = new EventEmitter<number>();
  
  constructor(private broadcastSvc: BroadcastService) { }

  ngOnInit(): void {
  }

  switchAlgorithmOption(option: number) {
    this.selectedAlgorithm = option;
  }

  algorithmStart() {
    let algorithmEventName = this.selectedAlgorithm == 1 ? 'linearSearch' : 'binarySearch';
    this.broadcastSvc.broadcastEvent(
      new EventData(
        algorithmEventName,
        this.searchingElement
      )
    );
  }

  onSearchingElementChange() {
    this.searchingElementEmitter.emit(this.searchingElement);
  }

}
