import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DevisService } from '../Service/devis.service';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demande-devis',
  templateUrl: './demande-devis.component.html',
  styleUrls: ['./demande-devis.component.css']
})
export class DemandeDevisComponent implements OnInit {
  currentFlag!: string;
  userForm!: FormGroup;
constructor(private router:Router,private fb: FormBuilder,private devisservice:DevisService,private translate: TranslateService){

     translate.setDefaultLang('fr');
    this.currentFlag = 'assets/flags/fr.png';
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
    this.router.navigateByUrl("/")

      }
  ngOnInit(): void {
    this.compte()
    this.userForm = this.fb.group({
      nomComplet: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      numeroDeTelephone: ['', Validators.required],
      nomDeSociete: ['', Validators.required],
      nombreDEmployes: ['', Validators.required],
      gestionCommerciale: [false],
      finances: [false],
      pointage: [false],
      gmao: [false],
      decisionnel: [false],
      crm: [false],
      paie: [false],
      gpao: [false],
      immobilisation: [false],
    });
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

    }
  }
  onSubmit() {
    console.log(this.userForm.value)
    if (this.userForm.valid) {
      this.devisservice.submitForm(this.userForm.value).subscribe(response => {
        console.log('Form submitted successfully', response);
        if (response){

Swal.fire({
  position: "top-end",
  icon: "success",
  title: "LE Demande et envoyée avec succée",
  showConfirmButton: false,
  timer: 1500
});
this.userForm.reset()
        }
      }, error => {
        console.error('Error submitting form', error);
      });
    }
  }

gotoformation(){
this.router.navigateByUrl("/formation")
}
gotopack(){
  this.router.navigateByUrl("/pack")
}
gotomediatheque(){
  this.router.navigateByUrl("/mediatheque")
}
gotocontact(){
  this.router.navigateByUrl("/contact")
}
gotologin(){
  this.router.navigateByUrl("/login")
}
gotoregistre(){
  this.router.navigateByUrl("/registre")
}
tohome(){
  this.router.navigateByUrl("/")
}
}
