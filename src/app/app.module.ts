import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventaddComponent } from './eventadd/eventadd.component';
import { EventStatusService } from './event-status.service';

const appRoutes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'eventlist', component: EventlistComponent },
  { path: 'eventadd', component: EventaddComponent },
  { path: 'eventadd/:id', component: EventaddComponent },
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    EventlistComponent,
    EventaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    HttpClientModule
  ],
  providers: [EventStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
