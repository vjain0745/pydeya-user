import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginHomeComponent} from './login-home.component';

const routes: Routes = [
    { path: '',component:LoginHomeComponent},
    { path: 'login-home',component:LoginHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginHomeRoutingModule { }
