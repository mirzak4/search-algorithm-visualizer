export interface IEventData {
    eventName: string,
    eventData: any
}

export class EventData implements IEventData {
    eventName: string;
    eventData: any;

    constructor(eventName: string, eventData: any = null){
        this.eventName = eventName;
        this.eventData = eventData;
    }
}