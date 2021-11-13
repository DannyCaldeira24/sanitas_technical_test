import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dummy } from '../../models/Dummy';

@Component({
  selector: 'app-virtual-scroll-content',
  templateUrl: './virtual-scroll-content.component.html',
  styleUrls: ['./virtual-scroll-content.component.scss'],
})
export class VirtualScrollContentComponent implements OnInit {

  @Input() items: Observable<Dummy[]>
  constructor() { }

  ngOnInit() { }

}
