import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: '',
        redirectTo: 'veterinarians',
        pathMatch: 'full',
      },
      {
        path: 'veterinarians',
        loadChildren: () =>
          import('../veterinarians/veterinarians.module').then((m) => m.VeterinariansPageModule),
      },

      {
        path: 'pets',
        loadChildren: () => import('../pets/pets.module').then((m) => m.PetsPageModule),
      },

      {
        path: 'toys',
        loadChildren: () => import('../toys/toys.module').then((m) => m.ToysPageModule),
      },

      {
        path: 'food',
        loadChildren: () => import('../food/food.module').then((m) => m.FoodPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
