import { Component } from '@angular/core';
import { Dummy } from '../core/models/Dummy';
// import { DataService } from '../core/services/data.service';
import fakeData from 'src/app/core/Utils/fakeData.json';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dummyData: Dummy[] = fakeData

  private _filteredData: BehaviorSubject<Dummy[]> = new BehaviorSubject(fakeData)
  set filteredData(value: Dummy[]) { this._filteredData.next(value) }
  // get filteredData(): Dummy[] { return this._filteredData.value }
  private _filteredData$(): Observable<Dummy[]> { return this._filteredData.asObservable() }

  observerRef: Observable<Dummy[]>
  constructor(
    // private _data: DataService
  ) { }

  filterEvent($event) {
    this.filteredData = $event
  }
  ionViewDidEnter() {
    // this.dummyData = <Dummy[]>JSON.parse(this._data.generateDummyData(4000))
    this.observerRef = this._filteredData$()
  }

}
