/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MicroservicesComponent } from './microservices.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from '@/pages/miscellaneous/not-found/not-found.component';
import { ECommerceComponent } from '@/pages/e-commerce/e-commerce.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [{
  path: '',
  component: MicroservicesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'settings',
      component: SettingsComponent,
    },
    {
      path: 'accounts',
      loadChildren: () => import('./accounts/accounts.module')
        .then(m => m.AccountsModule),
    },
    {
      path: 'catalog',
      loadChildren: () => import('./catalog/catalog.module')
        .then(m => m.CatalogModule),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicroservicesRoutingModule {
}
