import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-comptabilite',
  templateUrl: './comptabilite.component.html',
  styleUrls: ['./comptabilite.component.css']
})
export class ComptabiliteComponent {
  currentFlag!: string;



  constructor(private translate: TranslateService){
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
}
