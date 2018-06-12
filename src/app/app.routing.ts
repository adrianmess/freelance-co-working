import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PlansComponent } from './plans/plans.component';
import { LoginComponent } from './login/login.component';

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
          path: 'contact',
          component: AboutComponent
        },
        {
            path: 'plans',
            component: AboutComponent
          },
          {
              path: 'login',
              component: LoginComponent
            }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
