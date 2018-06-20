import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollspyComponent } from './core/scrollspy/scrollspy.component';
import { SidenavbarComponent } from './core/sidenavbar/sidenavbar.component';
import { ElasticSearchService } from './elasticsearch/elasticsearch.service';

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
  providers: [ ElasticSearchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
