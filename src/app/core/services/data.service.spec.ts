import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { map } from 'rxjs/operators';
import { Dummy } from '../models/Dummy';
describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
  it('generate correctly Random Data', () => {
    const service: DataService = TestBed.get(DataService);
    service.generateDummyData(4000).subscribe((dummyData: Dummy[]) => {
      expect(dummyData.length === 4000).toBeTruthy();
      expect(dummyData[3999].id === 4000).toBeTruthy();
      expect(dummyData[3999].photo === 'https://picsum.photos/id/4000/500/500.jpg').toBeTruthy();
    })
  });
});
