import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  listeUSer:any

  constructor(private Userservice:UtilisateurService){}
  ngOnInit(): void {
this.getalluser()
  }


  getalluser(){
    this.Userservice.getAllusers().subscribe(data=>{
      console.log(data)
      this.listeUSer=data
    })
  }

}
