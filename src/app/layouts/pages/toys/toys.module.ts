import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToysPageRoutingModule } from './toys-routing.module';

import { ToysPage } from './toys.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ToysPageRoutingModule, CoreModule],
  declarations: [ToysPage],
})
export class ToysPageModule {}
