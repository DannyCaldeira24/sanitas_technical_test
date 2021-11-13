import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';

import { VirtualScrollContentComponent } from './virtual-scroll-content.component';
import fakeData from 'src/app/core/Utils/fakeData.json';
describe('VirtualScrollContentComponent', () => {
  let component: VirtualScrollContentComponent;
  let fixture: ComponentFixture<VirtualScrollContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [VirtualScrollContentComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VirtualScrollContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('correctly observer instance', () => {
    component.items = of(fakeData)
    fixture.detectChanges();
    component.items.subscribe((val) => expect(val.length).toBe(4000))
  });
});
