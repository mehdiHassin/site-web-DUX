import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/Service/token-storage.service';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { User } from 'src/app/models/User.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType!: boolean;
  currentUser:any
constructor( private formBuilder: UntypedFormBuilder,private tokenservice:TokenStorageService, private router: Router,private userservice:UtilisateurService){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
gotoregistre(){
this.router.navigateByUrl('/registre')
}
gotoreset(){
  this.router.navigateByUrl('/resetpass')
}
get f() { return this.loginForm.controls; }
onSubmit() {
  console.log(this.loginForm.value)
    this.submitted = true;
let user:User =new User
user.email=this.f['email'].value
user.password=this.f['password'].value
  console.log(user)
    // Login Api
    this.userservice.login(user).subscribe((data:any) => {
     console.log(data)
      if(data!= null){


        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        if (data.role==="adminstrateur"){
          this.tokenservice.saveTokenSession( data.jwtToken)


          sessionStorage.setItem('toast', 'true');
          sessionStorage.setItem('currentUser', JSON.stringify(data));
          sessionStorage.setItem('token', data.jwtToken);
          sessionStorage.setItem('role', data.role);
          this.router.navigateByUrl("/admin");



        }else {
          this.tokenservice.saveTokenlocaln( data.jwtToken)


          localStorage.setItem('toast', 'true');
          localStorage.setItem('currentUser', JSON.stringify(data));
          localStorage.setItem('token', data.jwtToken);
          localStorage.setItem('role', data.role);
        this.router.navigateByUrl("/");

        }

      } else {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: "Confirmer votre Password",
          showConfirmButton: false,
          timer: 1500
        });
      }
    });

  }

  /**
   * Password Hide/Show
   */
   toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
