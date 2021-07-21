import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateComponent } from './components/util/rate/rate.component';

@NgModule({
  declarations: [RateComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [RateComponent],
})
export class CoreModule {}
