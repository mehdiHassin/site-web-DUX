import { Component, OnInit } from '@angular/core';
import { FormationServicService } from 'src/app/Service/formation-servic.service';
import { Formation } from 'src/app/models/Formation.Models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css']
})
export class ListeFormationComponent implements OnInit {
  listeUSer:any

  constructor(private fortmationservice:FormationServicService){}
  ngOnInit(): void {
this.getalluser()
  }


  getalluser(){
    this.fortmationservice.getAllformation().subscribe(data=>{
      console.log(data)
      this.listeUSer=data
    })
  }
valider(item:any){
  console.log(item)
  let formation = new Formation();
  formation.nom = item.nom;
  formation.email = item.email;
  formation.telephone = item.telephone;
  formation.nomSocite = item.nomSocite;
  formation.secteurActivite = item.secteurActivite;
  formation.description = item.description;
  formation.dateFormation = item.dateFormation
  formation.heure =item.heure
  formation.organisez = item.organisez;
  formation.statut = "Valider";
  console.log(formation)
this.fortmationservice.update(formation).subscribe(data=>{
  console.log(data)
  if (data){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }

})
}
}
