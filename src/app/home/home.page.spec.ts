import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import fakeData from 'src/app/core/UtilsDebugPurpose/fakeData.json';
import { DataService } from '../core/services/data.service';
import { of } from 'rxjs';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('set filtered data and get observable current value', () => {
    component.filteredData = fakeData.slice(1)
    fixture.detectChanges();
    component['_filteredData$']().subscribe((val) => expect(val.length).toBe(3999))
  });
  it('filterEvent update correctly filtered data', () => {
    component.filterEvent(fakeData.slice(10))
    fixture.detectChanges();
    component['_filteredData$']().subscribe((val) => expect(val.length).toBe(3990))
  });
  it('Call ionViewDidEnter and validate observer ref and get correctly dummy data', () => {
    const dataService = fixture.debugElement.injector.get(DataService)
    const spy = spyOn(dataService, 'generateDummyData').and.returnValue((of(fakeData)))
    component.ionViewDidEnter();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.observerRef).toBeTruthy()
    expect(component.dummyData.length === 4000).toBeTruthy()
  });
  it('Call ionViewDidLeave and validate if subscription is closed', () => {
    component.ionViewDidEnter();
    component.ionViewDidLeave();
    fixture.detectChanges();
    expect(component.subscription.closed).toBeTruthy()
  });
  it('If subscription is no instance, no call unsubscribe', () => {
    component.ionViewDidLeave();
    fixture.detectChanges();
    expect(component.subscription).toBeFalsy()
  });
});
