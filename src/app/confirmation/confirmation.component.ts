import { Component, OnInit } from '@angular/core';
import { FormationServicService } from '../Service/formation-servic.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
Formation:any
currentFlag!: string;
  constructor(private formationserv:FormationServicService,private route:Router,private translate: TranslateService){
    translate.setDefaultLang('fr');
    this.currentFlag = 'assets/flags/fr.png';

    let currentFormation =localStorage.getItem("formation")
    if(currentFormation){
      this.Formation=JSON.parse(currentFormation)
    }

  }
  ngOnInit(): void {
    this.compte()
  }
  affiche=false
  compte(){
    let user = localStorage.getItem('role');
      console.log("User role from localStorage:", user);
  if(user===null || user ===""){
    this.affiche=false


  }else{
    this.affiche=true


  }

  }
  deconection(){
    localStorage.clear()
    this.affiche=false
  this.route.navigateByUrl("/")

    }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    switch(lang) {
      case 'fr':
        this.currentFlag = 'assets/flags/fr.png';
        break;
      case 'en':
        this.currentFlag = 'assets/flags/gb.png';
        break;
      // Ajoutez d'autres cas ici pour d'autres langues
    }
  }
delet(){
  this.formationserv.deletFormation(this.Formation.id).subscribe((data:any)=>{
    console.log(data)
    if (data){
      localStorage.removeItem("formation")
      localStorage.removeItem("daterformation")
      localStorage.removeItem("heureformation")
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      this.route.navigateByUrl('/dateformation')
    }
  })
}
}
