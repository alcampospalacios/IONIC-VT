/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: '',
        redirectTo: 'veterinarians',
        pathMatch: 'full',
      },
      {
        path: 'veterinarians',
        loadChildren: () =>
          import('../layouts/pages/veterinarians/veterinarians.module').then(
            (m) => m.VeterinariansPageModule
          ),
      },

      {
        path: 'pets',
        loadChildren: () => import('../layouts/pages/pets/pets.module').then((m) => m.PetsPageModule),
      },

      {
        path: 'toys',
        loadChildren: () => import('../layouts/pages/toys/toys.module').then((m) => m.ToysPageModule),
      },

      {
        path: 'food',
        loadChildren: () => import('../layouts/pages/food/food.module').then((m) => m.FoodPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
