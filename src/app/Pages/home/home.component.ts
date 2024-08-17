import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentFlag!: string;
  constructor(private translate: TranslateService, private router:Router) {
    translate.setDefaultLang('fr');
    this.currentFlag = 'assets/flags/fr.png';
  }
  ngOnInit(): void {
    this.compte()
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
  verifierusr(){
    let user = localStorage.getItem('role');
    console.log("User role from localStorage:", user);
if(user===null || user ===""){
this.router.navigateByUrl('/registre')

}else{
  this.router.navigateByUrl('/dateformation')

}
    // Checking if the user is null or an empty string

  }


  async openmodel(){
    const { value: email } = await Swal.fire({
      title: "Entrer votre mail ! ",
      input: "email",
      inputLabel: "Ton address mail",
      inputPlaceholder: "Enter your email address"
    });
    if (email) {
      Swal.fire({
        title: "Envoyer!",
        text: "Vous recvez un mail dans 24h pour répondre à votre besoin ! ",
        icon: "success"
      });
    }
  }
}
