import {Routes, RouterModule} from '@angular/router';

import {Home} from './home';
import {About} from './about';
import { Login } from './security/login.component';
import { AuthService } from './services/auth.service';


export const routes: Routes = [
	{ path: '', component: Home, pathMatch: 'full', canActivate: [AuthService]},
  {path: 'login', component: Login},
  {path: 'about', component: About}
];

export const routing = RouterModule.forRoot(routes);
