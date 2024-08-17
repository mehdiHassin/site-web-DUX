import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RegistreComponent } from './Pages/registre/registre.component';
import { HomeComponent } from './Pages/home/home.component';
import { MediathequeComponent } from './Pages/mediatheque/mediatheque.component';
import { PointageComponent } from './Pages/Modules/pointage/pointage.component';
import { CRMComponent } from './Pages/Modules/crm/crm.component';
import { DecisionnelComponent } from './Pages/Modules/decisionnel/decisionnel.component';
import { GMAOComponent } from './Pages/Modules/gmao/gmao.component';
import { GPAOComponent } from './Pages/Modules/gpao/gpao.component';
import { ComptabiliteComponent } from './Pages/Modules/comptabilite/comptabilite.component';
import { ImmobilisationComponent } from './Pages/Modules/immobilisation/immobilisation.component';
import { PaieComponent } from './Pages/Modules/paie/paie.component';
import { CofirmpasswordComponent } from './cofirmpassword/cofirmpassword.component';
import { PackComponent } from './pack/pack.component';
import { FormationComponent } from './formation/formation.component';
import { FormationdateComponent } from './formationdate/formationdate.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ChangerpasswordComponent } from './changerpassword/changerpassword.component';
import { DemandeDevisComponent } from './demande-devis/demande-devis.component';
import { ProfilComponent } from './profil/profil.component';
import { ListUserComponent } from './Admin/list-user/list-user.component';
import { ListeFormationComponent } from './Admin/liste-formation/liste-formation.component';
import { ListeDevisComponent } from './Admin/liste-devis/liste-devis.component';

const routes: Routes = [
{path:"",component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'registre',component:RegistreComponent},
{path:'mediatheque',component:MediathequeComponent},
{path:"resetpass",component:CofirmpasswordComponent},
{path:"formation",component:FormationComponent},
{path:"dateformation",component:FormationdateComponent},
{path:"confirmationinfor",component:ConfirmationComponent},
{path:"contact",component:ContactComponent},
{path:"profil",component:ProfilComponent},
{path:"devis",component:DemandeDevisComponent},

{path:'pointage',component:PointageComponent},
{path:'crm',component:CRMComponent},
{path:'decitionel',component:DecisionnelComponent},
{path:'gmao',component:GMAOComponent},
{path:'gpao',component:GPAOComponent},
{path:'comptabilite',component:ComptabiliteComponent},
{path:'immobilisation',component:ImmobilisationComponent},
{path:'paie',component:PaieComponent},
{path:'pack',component:PackComponent},
{path:'forgotpwd/:email',component:ChangerpasswordComponent},


{path:'admin',component:DashboardComponent},
{path:'admin/listclient',component:ListUserComponent},
{path:'admin/formation',component:ListeFormationComponent},
{path:'admin/devis',component:ListeDevisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
