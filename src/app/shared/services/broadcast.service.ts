import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventData } from '../models/event-data.model';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {
  private emitter = new BehaviorSubject<EventData>(
    new EventData('', null)
  );
  public eventObservable = this.emitter.asObservable();
  constructor() { }

  public broadcastEvent(event: EventData) {
    this.emitter.next(event);
  }
}