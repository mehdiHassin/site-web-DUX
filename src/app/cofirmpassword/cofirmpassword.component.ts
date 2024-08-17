import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from '../Service/utilisateur.service';
import { User } from '../models/User.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cofirmpassword',
  templateUrl: './cofirmpassword.component.html',
  styleUrls: ['./cofirmpassword.component.css']
})
export class CofirmpasswordComponent implements OnInit {
  submitted = false;
  fieldTextType!: boolean;
  public resetForm!: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,

     private router: Router,
     private userservice:UtilisateurService,
  ){}
  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required]],

    });
  }
  get f() { return this.resetForm.controls; }

  onSubmit(){
    console.log(this.resetForm.value)
    this.submitted = true;
    let user:User =new User()


       user.email=this.f['email'].value
       this.userservice.sendemail(user).subscribe(data=>{
        console.log(data)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
       },error=>{
        console.log(error)
       })

  }


  confirme(){
this.router.navigateByUrl('/resetpass')
  }
}
