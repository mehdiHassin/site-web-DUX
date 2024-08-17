import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  currentFlag!: string;
  constructor(private translate: TranslateService ,private router:Router){
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
}
