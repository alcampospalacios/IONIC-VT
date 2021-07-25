import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeterinariansDetailsPageRoutingModule } from './veterinarians-details-routing.module';

import { VeterinariansDetailsPage } from './veterinarians-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeterinariansDetailsPageRoutingModule
  ],
  declarations: [VeterinariansDetailsPage]
})
export class VeterinariansDetailsPageModule {}
