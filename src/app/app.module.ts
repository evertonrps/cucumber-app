import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CarrosComponent } from './carros/carros.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from 'src/app.routes';
import { MainComponent } from './shared/main/main.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent,
    MainComponent,
    HomeComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, {useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
