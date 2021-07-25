import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'main',
  //   loadChildren: () => import('./layouts/pages/main/main.module').then((m) => m.MainPageModule),
  // },
  {
    path: '',
    redirectTo: '/tabs/tab1/veterinarians',
    pathMatch: 'full',
  },

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },

  {
    path: 'details/:id',
    loadChildren: () =>
      import('../app/layouts/pages/veterinarians/veterinarians-details/veterinarians-details.module').then(
        (m) => m.VeterinariansDetailsPageModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
