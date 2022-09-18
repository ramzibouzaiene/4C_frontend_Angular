import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActdetailComponent } from './components/actdetail/actdetail.component';
import { ActualiteComponent } from './components/actualite/actualite.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { BiblioComponent } from './components/biblio/biblio.component';
import { BlogdetailComponent } from './components/blogdetail/blogdetail.component';
import { CertificationComponent } from './components/certification/certification.component';
import { CommentactiviteComponent } from './components/commentactivite/commentactivite.component';
import { ConseilComponent } from './components/conseil/conseil.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { EventComponent } from './components/event/event.component';
import { FinishresumeComponent } from './components/finishresume/finishresume.component';
import { FormationsComponent } from './components/formations/formations.component';
import { GestioncarriereComponent } from './components/gestioncarriere/gestioncarriere.component';
import { HomeComponent } from './components/home/home.component';
import { JourneesComponent } from './components/journees/journees.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MediaComponent } from './components/media/media.component';
import { OffresComponent } from './components/offres/offres.component';
import { PagedetailComponent } from './components/pagedetail/pagedetail.component';
import { PartnersComponent } from './components/partners/partners.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamComponent } from './components/team/team.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
