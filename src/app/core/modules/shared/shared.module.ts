import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollContentComponent } from '../../components/virtual-scroll-content/virtual-scroll-content.component';
import { IonicModule } from '@ionic/angular';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [SearchBarComponent, VirtualScrollContentComponent],
  imports: [
    CommonModule,
    ScrollingModule,
    IonicModule
  ],
  exports: [
    VirtualScrollContentComponent,
    ScrollingModule,
    SearchBarComponent
  ]
})
export class SharedModule { }
