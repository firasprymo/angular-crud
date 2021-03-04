import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { FlightModule } from './pages/flight/flight.module';
import { HomeModule } from './pages/home/home.module';
import { UsersModule } from './pages/users/users.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightModule,
    AppRoutingModule,
    HomeModule,
    UsersModule,
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
