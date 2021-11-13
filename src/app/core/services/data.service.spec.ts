import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
  it('generate correctly Array JSON', () => {
    const service: DataService = TestBed.get(DataService);
    const dummyData = JSON.parse(service.generateDummyData(4000))
    expect(dummyData.length === 4000).toBeTruthy();
    expect(dummyData[3999].id === 4000).toBeTruthy();
    expect(dummyData[3999].photo === 'https://picsum.photos/id/4000/500/500.jpg').toBeTruthy();
  });
});
