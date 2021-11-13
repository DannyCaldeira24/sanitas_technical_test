import { Injectable } from '@angular/core';
import fakerData from 'src/app/core/Utils/FakerData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  generateDummyData(num) {
    /**
     * This script generates an array of random data and converts it to json
     */
    const dummyData = new Array(num)
    for (let i = 0; i < num; i++) {
      dummyData[i] = {
        id: i + 1,
        photo: `https://picsum.photos/id/${i + 1}/500/500.jpg`,
        text: fakerData.getLoremParagraph()
      }
    }
    return JSON.stringify(dummyData)
  }
}
