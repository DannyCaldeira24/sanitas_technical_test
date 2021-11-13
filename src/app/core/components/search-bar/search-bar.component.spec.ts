import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import fakeData from 'src/app/core/Utils/fakeData.json';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('is correctly could sendFilteredData output event', () => {
    spyOn(component.sendFilteredData, 'emit');
    component.filterEvent({ detail: { value: '' } })
    expect(component.sendFilteredData.emit).toHaveBeenCalled();
  })
  it('is correctly filtered data with unique ID', () => {
    spyOn(component.sendFilteredData, 'emit');
    component.items = fakeData
    fixture.detectChanges();
    component.filterEvent({ detail: { value: '4000' } })
    expect(component.sendFilteredData.emit).toHaveSize(1);
  })
  it('is correctly filtered data with unique ID', () => {
    component.items = fakeData
    fixture.detectChanges();
    spyOn(component.sendFilteredData, 'emit');
    component.filterEvent({ detail: { value: '40001' } })
    expect(component.sendFilteredData.emit).toHaveSize(0);
  })
});
