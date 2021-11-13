import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dummy } from '../../models/Dummy';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  private _itemsList: Dummy[] = []
  @Output() sendFilteredData: EventEmitter<any> = new EventEmitter<any>();
  @Input() set items(value: Dummy[]) {
    this._itemsList = [...value]
  }
  constructor() { }

  ngOnInit() { }
  private _filterStates(value: string): Dummy[] {
    const filterValue = value.toLowerCase();
    const filtered = this._itemsList.filter(dummy =>
      String(dummy.id).toLowerCase().includes(filterValue)
      || dummy.text.toLowerCase().includes(filterValue)
    );
    return filtered
  }
  filterEvent($event) {
    const { value } = $event.detail
    this.sendFilteredData.emit(value ? this._filterStates(value) : this._itemsList.slice())
  }
}
