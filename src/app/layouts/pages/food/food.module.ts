import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodPageRoutingModule } from './food-routing.module';

import { FoodPage } from './food.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FoodPageRoutingModule, CoreModule],
  declarations: [FoodPage],
})
export class FoodPageModule {}
