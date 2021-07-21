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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
