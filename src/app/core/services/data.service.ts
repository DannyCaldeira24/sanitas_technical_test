import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import fakerData from 'src/app/core/UtilsDebugPurpose/FakerData';
import { Dummy } from '../models/Dummy';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  generateDummyData(num): Observable<Dummy[]> {
    /**
     * This script generates an array of random data
     */
    const dummyData = new Array(num)
    for (let i = 0; i < num; i++) {
      dummyData[i] = {
        id: i + 1,
        photo: `https://picsum.photos/id/${i + 1}/500/500.jpg`,
        text: fakerData.getLoremParagraph()
      }
    }
    return of(dummyData)
  }
}
