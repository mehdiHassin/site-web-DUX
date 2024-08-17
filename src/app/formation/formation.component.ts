import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Formation } from '../models/Formation.Models';
import { FormationServicService } from '../Service/formation-servic.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


interface Country {
  code: string;
  name: string;
}
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit{
  currentFlag!: string;

  FormFormation!:FormGroup
  constructor(private translate: TranslateService ,private fb:FormBuilder,private foramtionservice:FormationServicService, private route:Router){
    translate.setDefaultLang('fr');
    this.currentFlag = 'assets/flags/fr.png';
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
  ngOnInit(): void {
    this.compte()
    localStorage.removeItem("formation")
 this.FormFormation=this.fb.group({
  nom:['',Validators.required],
  email:['',Validators.required],
  telephone:['',Validators.required],
  nomSocite:['',Validators.required],
  secteurActivite:['',Validators.required],
  description:['',Validators.required],

  organisez: ''

 })
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

  onSubmit() {
    const valeurOrganisez = this.FormFormation?.get('organisez')?.value;


    // Vérifier si this.FormFormation est null ou undefined
    if (this.FormFormation && this.FormFormation.invalid) {

    } else {

        if (this.FormFormation) {
            let form = this.FormFormation.value;
            let formation = new Formation();
            formation.nom = form.nom;
            formation.email = form.email;
            formation.telephone = form.telephone;
            formation.nomSocite = form.nomSocite;
            formation.secteurActivite = form.secteurActivite;
            formation.description = form.description;
            formation.dateFormation = localStorage.getItem("daterformation");
            formation.heure = localStorage.getItem("heureformation");
            formation.organisez = form.organisez;
            formation.statut = "enCours";

            console.log(formation);
            this.foramtionservice.addFormation(formation).subscribe(data=>{
              console.log(data)
              if (data){

Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});

localStorage.setItem("formation",JSON.stringify(data))
this.route.navigateByUrl("/confirmationinfor")
              }
            },error=>{
              console.log(error)
            })
        }
    }
}
  countries: Country[] = [
    { code: 'dz', name: 'Algeria' },
    { code: 'de', name: 'Germany' },
    { code: 'gb', name: 'United Kingdom' }
  ];
  selectedCountry: Country | null = null;

  selectCountry(country: Country) {
    this.selectedCountry = country;
  }
}
