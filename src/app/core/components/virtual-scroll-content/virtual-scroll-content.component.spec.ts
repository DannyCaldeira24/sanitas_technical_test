import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';

import { VirtualScrollContentComponent } from './virtual-scroll-content.component';
import fakeData from 'src/app/core/Utils/fakeData.json';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
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
  it('show no results when items stream is empty', () => {
    component.items = of([])
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement.query(By.css('#cardEmpty'))
    expect(debugElement).toBeTruthy()
    if (debugElement) {
      const element: HTMLElement = debugElement.nativeElement
      expect(element.innerHTML).toContain("No results")
    }
  })
  it('show results when items stream is not empty', () => {
    component.items = of(fakeData)
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement.query(By.css('#cardEmpty'))
    expect(debugElement).toBeFalsy()
  })
});
