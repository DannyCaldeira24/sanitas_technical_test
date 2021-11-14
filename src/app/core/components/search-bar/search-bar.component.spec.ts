import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import fakeData from 'src/app/core/UtilsDebugPurpose/fakeData.json';
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
    component.filterEvent({ detail: { value: 'Example' } })
    expect(component.sendFilteredData.emit).toHaveBeenCalled();
  })
  it('is correctly could sendFilteredData output event when input change event is null', () => {
    spyOn(component.sendFilteredData, 'emit');
    component.filterEvent({ detail: { value: '' } })
    expect(component.sendFilteredData.emit).toHaveBeenCalled();
  })
  it('is correctly filtered with unique ID', () => {
    component.items = fakeData
    fixture.detectChanges();
    const data = component['_filterStates']('3998')
    expect(data.length == 1).toBeTruthy();
    expect(data[0].text).toBe('Ut id non error facere iste. In dolor velit rem ipsum itaque ut. Expedita consequatur fugit et est. Iste corrupti odit enim ducimus ullam necessitatibus quasi et corrupti.');
  })
  it('return correctly empty array', () => {
    component.items = fakeData
    fixture.detectChanges();
    const data = component['_filterStates']('4001')
    expect(data.length == 0).toBeTruthy();
  })
  it('return correctly filtered data with unique text', () => {
    component.items = fakeData
    fixture.detectChanges();
    const data = component['_filterStates']('Et ad aspernatur quia culpa sed esse maiores minima omnis. Vel voluptates repudiandae autem et. Est dolorem et ipsam incidunt praesentium nesciunt sit.')
    expect(data.length).toBe(1);
    expect(data[0].id).toBe(3999);
  })
  it('return correctly empty array with wrong text', () => {
    component.items = fakeData
    fixture.detectChanges();
    const data = component['_filterStates']('Wrong text: Eum consequuntur molestias et aliquam. Id minima eum voluptas nihil nulla aut. Et dignissimos pariatur. Laborum nihil laboriosam quis non ut aut itaque. Illo omnis laboriosam ipsam voluptatem qui consequuntur ut non. Fuga aut beatae eos iusto officiis.')
    expect(data.length).toBe(0);
  })
  it('return multiple records with part ID', () => {
    component.items = fakeData
    fixture.detectChanges();
    const data = component['_filterStates']('1')
    expect(data.length > 1).toBeTruthy();
  })
  it('return all data when scroll bar is empty', () => {
    component.items = fakeData
    fixture.detectChanges();
    const data = component['_filterStates']('')
    expect(data.length).toBe(4000);
  })
});
