import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeterinariansPage } from './veterinarians.page';

const routes: Routes = [
  {
    path: '',
    component: VeterinariansPage
  },
  {
    path: 'veterinarians-details',
    loadChildren: () => import('./veterinarians-details/veterinarians-details.module').then( m => m.VeterinariansDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeterinariansPageRoutingModule {}
