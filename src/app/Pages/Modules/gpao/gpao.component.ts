import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gpao',
  templateUrl: './gpao.component.html',
  styleUrls: ['./gpao.component.css']
})
export class GPAOComponent {
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
