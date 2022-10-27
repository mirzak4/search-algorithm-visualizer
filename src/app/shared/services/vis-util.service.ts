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
          "value": Math.floor(Math.random() * 99) + 1,
          "isCurrent": false,
          "isMatch": false
        }
      );
    }
    return data;
  }

  public isDataSorted(data: any[]) {
    let secondIndex;
    for(let firstIndex = 0; firstIndex < data.length; firstIndex++){
        secondIndex = firstIndex + 1;
        if(data[secondIndex].value - data[firstIndex].value < 0) return false;
      }
      return true;
  }
}
