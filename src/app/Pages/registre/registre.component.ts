import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { User } from 'src/app/models/User.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  RegistreForm!:UntypedFormGroup
  submitted=false
  form: any = {

    password:null,
    Confirmedpassword:null,
    firstname:null,
    lastname:null,
    phone:null,
    email: null,


  };
  passwordequal : any;
constructor( private formBuilder: UntypedFormBuilder, private router: Router,private userservice:UtilisateurService){}


ngOnInit(): void {
  this.RegistreForm=this.formBuilder.group({

    password:['', [Validators.required]],
    Confirmedpassword:['', [Validators.required]],
    firstname:['', [Validators.required]],
    lastname:['', [Validators.required]],
    phone:['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],

  })
  this.passwordequal = true;
}
get f() { return this.RegistreForm.controls; }

onSubmit(){
  console.log(this.RegistreForm.value)
  console.log(this.RegistreForm.value)
  console.log("pass2",this.RegistreForm.value.Confirmedpassword)
  console.log("pass",this.RegistreForm.value.password)

  if(this.RegistreForm.value.password != this.RegistreForm.value.Confirmedpassword){
    console.log("not equal");
    this.passwordequal = false;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "Confirmer votre Password",
      showConfirmButton: false,
      timer: 1500
    });
  }else if(this.RegistreForm.value.password.length<8){
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "Confirmer votre Password il faut egal a 8 chiffre ",
      showConfirmButton: false,
      timer: 1500
    });
  }else{


    let registre=this.RegistreForm.value
    console.log("equal");
    this.passwordequal = true;


    const user=new User()
    user.firstname=registre.firstname
    user.username=registre.firstname+"_"+registre.lastname
    user.lastname=registre.lastname
    user.password=registre.password
    user.phone=registre.phone
user.confirmePassword=registre.Confirmedpassword
    user.email=registre.email
    user.role="user"

    console.log(user)

    this.userservice.registre(user).subscribe(data=>{
      console.log(data)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registre success",
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl("/login")
    },error=>{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "erreur",
        showConfirmButton: false,
        timer: 1500
      });

    })

  }

 }
goToLogin(){
this.router.navigateByUrl('/login')
}
}
