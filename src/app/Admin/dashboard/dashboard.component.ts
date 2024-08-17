import { DemandeDevisComponent } from './../../demande-devis/demande-devis.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevisService } from 'src/app/Service/devis.service';
import { FormationServicService } from 'src/app/Service/formation-servic.service';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
totalFormation:number=0
totalUser:number=0
totaldevis:number=0
constructor(private router:Router,private formationSer:FormationServicService, private demandedevis :DevisService, private userservi:UtilisateurService){}
  ngOnInit(): void {
let user=sessionStorage.getItem('role')
if(user==='user'){
this.router.navigateByUrl('/')
}
      this.formationSer.getAllformation().subscribe(data=>{
        console.log(data)
        this.totalFormation=data.length
      })
      this.userservi.getAllusers().subscribe(data=>{
        console.log(data)
        this.totalUser=data.length
      })
      this.demandedevis.getAllDevis().subscribe(data=>{
        console.log(data)
        this.totaldevis=data.length
           })

  }

}
