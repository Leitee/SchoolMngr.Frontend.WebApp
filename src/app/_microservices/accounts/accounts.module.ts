import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [AccountsComponent, ProfileComponent],
  imports: [
    CommonModule,
  ]
})
export class AccountsModule { }
