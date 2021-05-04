import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// modules

import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { ModalModule } from 'ngx-bootstrap/modal';

// components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AppRouterModule } from "./app.route";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LearnComponent } from './learn/learn.component';
import { FeatureComponent } from './feature/feature.component';
import { FaqComponent } from './faq/faq.component';
import { SupportComponent } from './support/support.component';
import { UpdatesComponent } from './updates/updates.component';
import { RequirementComponent } from './requirement/requirement.component';
import { EventEmitterService } from "./event-emitter.service";
import { DataService } from "./data.service";
import { MailerService } from "./home/mailer.service";
import { BookarequestComponent } from './bookarequest/bookarequest.component';
import { BookademomailerService } from "./bookarequest/bookademomailer.service";
// services

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LearnComponent,
    FeatureComponent,
    FaqComponent,
    SupportComponent,
    UpdatesComponent,
    RequirementComponent,
    BookarequestComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    
  ],
  providers: [
    BookademomailerService,
    MailerService,
    EventEmitterService,
    DataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
