import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisUtilService {

  constructor() { }

  private factor: number = 1;
  private algoVisible: boolean = false;
  private algorithmTitle: string;
  private algorithmContent: string;

  public sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public algoSleep(ms: number) {
    let time = ms/this.factor;
    return this.sleep(time);
  }

  public setFactor(value: number) {
    this.factor = value;
  }

  public getFactor() {
    return this.factor == 2/3 ? 0.5 : this.factor;
  }

  get algoDescVisible() {
    return this.algoVisible;
  }

  set algoDescVisible(visibility: boolean) {
    this.algoVisible = visibility;
  }

  get algoTitle() {
    return this.algorithmTitle;
  }

  get algoContent() {
    return this.algorithmContent;
  }

  public setAlgoDescriptionInfo(algorithmOption: number) {
    switch (algorithmOption) {
      case 1:
        this.algorithmTitle = "Linear Search";
        this.algorithmContent = `Linear search is a classic representative of the group of sequential search algorithm. 
        It starts at the beginning of the collection being searched, comparing element by element until the search is found, 
        or the end of the collection is reached. It is the simpliest searching algorithm from the perspective of its logic.
        However it is not so effective when it comes to big data sets`
        break;
      case 2:
        this.algorithmTitle = "Binary Search";
        this.algorithmContent = `Binary search basically uses a "divide and conquer" technique which
        divides the sequence into two parts. The requested element is compared with the element in the middle of the sequence. 
        In case of equality, the algorithm terminates. Otherwise, the search and the procedure continue
        repeats in one of two divided intervals depending on whether the requested element is larger or smaller than the central element. Assume the array is sorted
        in ascending order.`
        break;
    }
  }
  

  public generateData(inputData: string): any[] {
    let data: any[] = [];
    if (!inputData) {
      return data;
    }
    let parsedData = inputData.split(",");
    parsedData.forEach(parsedElement => {
      data.push({
        "value": Number.parseInt(parsedElement),
        "isCurrent": false,
        "isMatch": false
      });
    });
    if (data.some(element => Number.isNaN(element.value))) {
      return [];
    }
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
    for(let firstIndex = 0; firstIndex < data.length - 1; firstIndex++){
        secondIndex = firstIndex + 1;
        if(data[secondIndex].value - data[firstIndex].value < 0) return false;
      }
      return true;
  }

  public isDefined(value: any) {
    return value != null && value != undefined;
  }
}
