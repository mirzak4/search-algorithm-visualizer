import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisUtilService {

  constructor() { }

  public sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public generateData(inputData: string): any[] {
    let data: any[] = [];
    let parsedData = inputData.split(",");
    parsedData.forEach(parsedElement => {
      data.push({
        "value": Number.parseInt(parsedElement),
        "isCurrent": false,
        "isMatch": false
      });
    });
    return data;
  }

  public generateRandomData() {
    let data: any[] = [];
    let dataLengh = Math.floor(Math.random() * 20) + 1;
    for (let i = 0; i < dataLengh; i++) {
      data.push(
        {
          "value": Math.floor(Math.random() * 100) + 1,
          "isCurrent": false,
          "isMatch": false
        }
      );
    }
    return data;
  }
}
