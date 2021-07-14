import { NgModule } from '@angular/core';
import { MicroservicesComponent } from './microservices.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { MicroservicesRoutingModule } from './microservices-routing.module';
import { PagesMenu } from '@/pages/pages-menu';
import { ThemeModule } from '@/_theme/theme.module';
import { NbCardModule, NbMenuModule, NbSelectModule } from '@nebular/theme';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  imports: [
    NbMenuModule,
    NbCardModule,
    NbSelectModule,
    ThemeModule,
    MicroservicesRoutingModule,
  ],
  declarations: [
    MicroservicesComponent,
    CatalogComponent,
    HomeComponent,
    SettingsComponent,
  ],
  providers: [
    PagesMenu,
  ],
})
export class MicroservicesModule { }
