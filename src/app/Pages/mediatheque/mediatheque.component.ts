import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mediatheque',
  templateUrl: './mediatheque.component.html',
  styleUrls: ['./mediatheque.component.css']
})
export class MediathequeComponent implements OnInit {

  public affiche=false
  public affiche1=false
  public affiche2=false
  public affiche3=false
  public affiche4=false

  currentFlag!: string;
  constructor(private router:Router ,private translate: TranslateService){
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
  }
  reset(){
    this.affiche=false
    this.affiche1=false
    this.affiche2=false
    this.affiche3=false
    this.affiche4=false


  }
  affichebtn=false
  compte(){
    let user = localStorage.getItem('role');
      console.log("User role from localStorage:", user);
  if(user===null || user ===""){
    this.affichebtn=false


  }else{
    this.affichebtn=true


  }

  }
  deconection(){
    localStorage.clear()
    this.affichebtn=false
  this.router.navigateByUrl("/")

    }

  goto(){
    this.affiche=true
  }
  goProCheque(){
    this.affiche=true
    this.affiche1=true
    this.affiche2=false
    this.affiche3=false
    this.affiche4=false

  }
  gotoASM(){
    this.affiche=true
    this.affiche1=false
    this.affiche2=true
    this.affiche3=false
    this.affiche4=false


  }
  gotoMise(){
    this.affiche=true
    this.affiche1=false
    this.affiche2=false
    this.affiche3=true
    this.affiche4=false
  }
  gotoErp(){
    this.affiche=true
    this.affiche1=false
    this.affiche2=false
    this.affiche3=false
    this.affiche4=true
  }

  gotoformation(){
    const User=localStorage.getItem('role')
    if (User){
      this.router.navigateByUrl('/dateformation')
    }
    else{
      this.router.navigateByUrl('/login')

    }
  }

}
