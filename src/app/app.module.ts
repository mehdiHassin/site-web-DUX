import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistreComponent } from './Pages/registre/registre.component';
import { HomeComponent } from './Pages/home/home.component';
import { MediathequeComponent } from './Pages/mediatheque/mediatheque.component';
import { PointageComponent } from './Pages/Modules/pointage/pointage.component';
import { CRMComponent } from './Pages/Modules/crm/crm.component';
import { PaieComponent } from './Pages/Modules/paie/paie.component';
import { ImmobilisationComponent } from './Pages/Modules/immobilisation/immobilisation.component';
import { DecisionnelComponent } from './Pages/Modules/decisionnel/decisionnel.component';
import { GPAOComponent } from './Pages/Modules/gpao/gpao.component';
import { GMAOComponent } from './Pages/Modules/gmao/gmao.component';
import { ComptabiliteComponent } from './Pages/Modules/comptabilite/comptabilite.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CofirmpasswordComponent } from './cofirmpassword/cofirmpassword.component';
import { PackComponent } from './pack/pack.component';
import { FormationComponent } from './formation/formation.component';
import { FormationdateComponent } from './formationdate/formationdate.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ChangerpasswordComponent } from './changerpassword/changerpassword.component';
import { ListUserComponent } from './Admin/list-user/list-user.component';
import { DemandeDevisComponent } from './demande-devis/demande-devis.component';
import { ProfilComponent } from './profil/profil.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ListeFormationComponent } from './Admin/liste-formation/liste-formation.component';
import { ListeDevisComponent } from './Admin/liste-devis/liste-devis.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistreComponent,
    HomeComponent,
    MediathequeComponent,
    PointageComponent,
    CRMComponent,
    PaieComponent,
    ImmobilisationComponent,
    DecisionnelComponent,
    GPAOComponent,
    GMAOComponent,
    ComptabiliteComponent,
    ResetPasswordComponent,
    CofirmpasswordComponent,
    PackComponent,
    FormationComponent,
    FormationdateComponent,
    ConfirmationComponent,
    ContactComponent,
    DashboardComponent,
    ChangerpasswordComponent,
    ListUserComponent,
    DemandeDevisComponent,
    ProfilComponent,
    ListeFormationComponent,
    ListeDevisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
