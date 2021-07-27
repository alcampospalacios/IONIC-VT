import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateComponent } from './components/util/rate/rate.component';
import { MapComponent } from './components/util/map/map.component';

@NgModule({
  declarations: [RateComponent, MapComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [RateComponent, MapComponent],
})
export class CoreModule {}
