import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Routing */
import { CanActivate, Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
/* FormsModule */
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import { ToastrModule } from 'ngx-toastr';
/* Angular Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';
/* Authentification */

/* Components */
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { JourneesComponent } from './journees/journees.component';
import { EventComponent } from './event/event.component'; 
import { PartnersComponent } from './partners/partners.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormationsComponent } from './formations/formations.component';
import { MediaComponent } from './media/media.component';
import { BiblioComponent } from './biblio/biblio.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { TeamComponent } from './team/team.component';
import { CertificationComponent } from './certification/certification.component';
import { OffresComponent } from './offres/offres.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    JourneesComponent,
    EventComponent,
    PartnersComponent,
    SignupComponent,
    LoginComponent,
    FormationsComponent,
    MediaComponent,
    BiblioComponent,
    WorkshopsComponent,
    TeamComponent,
    CertificationComponent,
    OffresComponent,
    ProfileComponent,
    LogoutComponent,
    EditprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatIconModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent },
    {path: 'partners', component: PartnersComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'events/:id', component: EventComponent},
    {path: 'journees', component: JourneesComponent},
    {path: 'partners', component: PartnersComponent},
    {path: 'trainings', component: FormationsComponent},
    {path: 'media', component: MediaComponent},
    {path: 'library', component: BiblioComponent},
    {path: 'workshops', component: WorkshopsComponent},
    {path: 'teams', component: TeamComponent},
    {path: 'certification', component: CertificationComponent},
    {path: 'offres', component: OffresComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'editprofile', component: EditprofileComponent},
  ]),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
