import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlansComponent } from './plans/plans.component';
import { LoginComponent } from './login/login.component';
import { StourComponent } from './stour/stour.component';
import { AmenitiesComponent } from './amenities/amenities.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'plans',
    component: PlansComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'stour',
    component: StourComponent
  },
  {
    path: 'amenities',
    component: AmenitiesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
