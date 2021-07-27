import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetsPageRoutingModule } from './pets-routing.module';

import { PetsPage } from './pets.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PetsPageRoutingModule, CoreModule],
  declarations: [PetsPage],
})
export class PetsPageModule {}
