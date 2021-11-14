import { Component } from '@angular/core';
import { Dummy } from '../core/models/Dummy';
import { DataService } from '../core/services/data.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dummyData: Dummy[] = []

  private _filteredData: BehaviorSubject<Dummy[]> = new BehaviorSubject([])
  set filteredData(value: Dummy[]) { this._filteredData.next(value) }
  private _filteredData$(): Observable<Dummy[]> { return this._filteredData.asObservable() }

  observerRef: Observable<Dummy[]>

  subscription: Subscription
  constructor(
    private _data: DataService
  ) { }

  filterEvent($event) {
    this.filteredData = $event
  }
  ionViewDidEnter() {
    this.observerRef = this._filteredData$()
    this.subscription = this._data.generateDummyData(4000).subscribe((data: Dummy[]) => {
      this.dummyData = [...data]
      this.filteredData = data
    })
  }
  ionViewDidLeave() {
    this.subscription?.unsubscribe()
  }
}
