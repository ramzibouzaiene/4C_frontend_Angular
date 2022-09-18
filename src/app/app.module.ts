import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Routing */
import { CanActivate, Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
/* FormsModule */
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
/* Notifications */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Angular Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';
/* Authentification */
import { OffresService } from './services/offres.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';




import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';



/* Components */
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { JourneesComponent } from './components/journees/journees.component';
import { EventComponent } from './components/event/event.component';
import { PartnersComponent } from './components/partners/partners.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormationsComponent } from './components/formations/formations.component';
import { MediaComponent } from './components/media/media.component';
import { BiblioComponent } from './components/biblio/biblio.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { TeamComponent } from './components/team/team.component';
import { OffresComponent } from './components/offres/offres.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { ActualiteComponent } from './components/actualite/actualite.component';
import { environment } from '../environments/environment';
import { PagedetailComponent } from './components/pagedetail/pagedetail.component';
import { SelectedOffrePipe } from './selected-offre.pipe';
import { ActdetailComponent } from './components/actdetail/actdetail.component';
import { CommentactiviteComponent } from './components/commentactivite/commentactivite.component';
import { PhotosComponent } from './components/photos/photos.component';
import { SearchComponent } from './components/search/search.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ConseilComponent } from './components/conseil/conseil.component';
import { GestioncarriereComponent } from './components/gestioncarriere/gestioncarriere.component';
import { BlogdetailComponent } from './components/blogdetail/blogdetail.component';
import { FinishresumeComponent } from './components/finishresume/finishresume.component';

// register FullCalendar plugins
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);
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
    OffresComponent,
    ProfileComponent,
    LogoutComponent,
    EditprofileComponent,
    ActualiteComponent,
    PagedetailComponent,
    SelectedOffrePipe,
    ActdetailComponent,
    CommentactiviteComponent,
    PhotosComponent,
    SearchComponent,
    AgendaComponent,
    ResetpasswordComponent,
    ResumeComponent,
    ReclamationComponent,
    CertificationComponent,
    ConseilComponent,
    GestioncarriereComponent,
    BlogdetailComponent,
    FinishresumeComponent
  ],
  imports: [
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    NgbModule,
    CommonModule,
    FlatpickrModule,
    NgbModalModule,
    FullCalendarModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    /* RouterModule.forRoot([
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
    {path: 'offres', component: OffresComponent},
    {path: 'profile/:id', component: ProfileComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'editprofile/:id', component: EditprofileComponent},
    {path: 'blogs', component: ActualiteComponent},
    {path: 'pagedetail/:id', component: PagedetailComponent},
    {path: 'actdetail/:id', component: ActdetailComponent},
    {path: 'commentactivite', component: CommentactiviteComponent},
    {path: 'photos', component: PhotosComponent},
    {path: 'agenda', component: AgendaComponent},
    {path: 'reset-password', component: ResetpasswordComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'reclamation', component: ReclamationComponent},
    {path: 'certification', component: CertificationComponent},
    {path: 'conseil', component: ConseilComponent},
    {path: 'gestioncarriere', component: GestioncarriereComponent},
    {path: 'blog/:id', component: BlogdetailComponent},
    {path: 'completresume', component: FinishresumeComponent},
  ]), */
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
