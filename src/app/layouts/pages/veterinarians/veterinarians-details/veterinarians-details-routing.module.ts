import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeterinariansDetailsPage } from './veterinarians-details.page';

const routes: Routes = [
  {
    path: '',
    component: VeterinariansDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeterinariansDetailsPageRoutingModule {}
