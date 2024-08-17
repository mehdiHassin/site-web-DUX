import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../models/User.models';
import { UtilisateurService } from '../Service/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-changerpassword',
  templateUrl: './changerpassword.component.html',
  styleUrls: ['./changerpassword.component.css']
})
export class ChangerpasswordComponent implements OnInit {
  email:any
  resetForm!:FormGroup
  passwordequal : any;
  fieldTextType!:boolean
    submitted=false
  constructor(private rout:ActivatedRoute,
    private formBuilder: UntypedFormBuilder,

       private router: Router,
       private userservice:UtilisateurService,
  ){
  this.email=this.rout.snapshot.paramMap.get('email')
  console.log(this.email)
  }

  ngOnInit(): void {
      this.resetForm=this.formBuilder.group({
        Confpassword: ['', [Validators.required]],
        password: ['', [Validators.required]],
      })
      this.passwordequal = true;
    }


    get f() { return this.resetForm.controls; }
    onSubmit(){
      this.submitted = true;
    if(this.resetForm.value.password != this.resetForm.value.Confpassword){
      console.log("not equal");
        this.passwordequal = false;
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: "Confirmer votre Password",
          showConfirmButton: false,
          timer: 1500
        });
    }else{
      let user:User =new User()

         user.email=this.email
         user.password= this.resetForm.value.password
         console.log(user)

         this.userservice.changerpassw(user).subscribe(data=>{
          console.log(data)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
         //this.router.navigate(['/home']);
         },error=>{
          console.log(error)
         })
    }

    }

    toggleFieldTextType() {
      this.fieldTextType = !this.fieldTextType;
    }

}
