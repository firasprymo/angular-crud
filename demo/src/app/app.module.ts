import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { FlightModule } from './pages/flight/flight.module';
import { HomeModule } from './pages/home/home.module';
import { UsersModule } from './pages/users/users.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { ProcessModule } from './pages/process/process.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightModule,
    AppRoutingModule,
    HomeModule,
    UsersModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
   AngularFirestoreModule,
   ProcessModule,
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
