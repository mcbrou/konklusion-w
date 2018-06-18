import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollspyComponent } from './components/scrollspy/scrollspy.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollspyComponent,
    SidenavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
