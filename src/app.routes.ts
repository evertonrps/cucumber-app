import { Routes } from '@angular/router';
import { CarrosComponent } from "./app/carros/carros.component";
import { HomeComponent } from './app/home/home.component';
import { GreetingComponent } from './app/greeting/greeting.component';

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent },
    {path:'carros', component: CarrosComponent},
    {path:'greeting', component:GreetingComponent}
]