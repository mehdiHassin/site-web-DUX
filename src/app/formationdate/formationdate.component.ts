import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formationdate',
  templateUrl: './formationdate.component.html',
  styleUrls: ['./formationdate.component.css']
})
export class FormationdateComponent implements OnInit {

  currentFlag!: string;

  currentYear!: number;
  currentMonth!: number;
  selectedDate: number | null = null;
  months: string[] = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Jui', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
  days: string[] = ['dim.', 'Lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];
  dates: any[][] = [];
  selectedDateObj: { year: number, month: number, date: number } | null = null;
  selectedValue: string | null = null;









  constructor(private router:Router ,private translate: TranslateService){
    translate.setDefaultLang('fr');
    this.currentFlag = 'assets/flags/fr.png';
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
  }
  ngOnInit(): void {
    this.generateCalendar();
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

  generateCalendar(): void {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const lastDate = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    let date = 1;
    this.dates = [];

    for (let i = 0; i < 6; i++) {
      this.dates[i] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          this.dates[i][j] = null;
        } else if (date > lastDate) {
          this.dates[i][j] = null;
        } else {
          this.dates[i][j] = date++;
        }
      }
    }
  }

  prevYear(): void {
    this.currentYear--;
    this.generateCalendar();
  }

  nextYear(): void {
    this.currentYear++;
    this.generateCalendar();
  }

  selectMonth(month: string): void {
    this.currentMonth = this.months.indexOf(month);
    this.generateCalendar();
  }
  daforma:any
  selectDate(date: number): void {
    console.log(date)
    if (date) {
      this.selectedDate = date;
      this.selectedDateObj = { year: this.currentYear, month: this.currentMonth, date: date };
      console.log(this.selectedDateObj)
        let formattedMonth = this.selectedDateObj.month.toString().padStart(2, '0');
    let formattedDate = this.selectedDateObj.date.toString().padStart(2, '0');
     this.daforma = `${this.selectedDateObj.year}-${formattedMonth}-${formattedDate}`;

    console.log(this.daforma);

    }
  }
  heure:any
  onButtonClick(event: any): void {
    this.selectedValue = event.target.value;
    console.log(this.selectedValue)
    if( this.selectedValue){
      console.log(this.daforma)
      localStorage.setItem("daterformation",this.daforma)
      localStorage.setItem("heureformation",this.selectedValue)
          this.router.navigateByUrl('/formation')
    }else{
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Confirmer votre Password",
        showConfirmButton: false,
        timer: 1500
      });
    }

  }
  backgroundColorChanged: boolean = false;

  changeBackgroundColor() {
    this.backgroundColorChanged = true;
  }
  isSelected(date: number): any {
    return this.selectedDateObj && this.selectedDateObj.year === this.currentYear &&
      this.selectedDateObj.month === this.currentMonth && this.selectedDateObj.date === date;
  }



}
