import { Component, OnInit } from '@angular/core';
import { DevisService } from 'src/app/Service/devis.service';

@Component({
  selector: 'app-liste-devis',
  templateUrl: './liste-devis.component.html',
  styleUrls: ['./liste-devis.component.css']
})
export class ListeDevisComponent implements OnInit {
  listeUSer:any
constructor(private devisser:DevisService){}
  ngOnInit(): void {
   this.devisser.getAllDevis().subscribe(data=>{
console.log(data)
this.listeUSer=data
   })
  }

}
