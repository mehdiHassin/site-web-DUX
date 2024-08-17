import { Injectable } from '@angular/core';
import { User } from '../models/User.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  API_URL="http://localhost:9000/auth"
  constructor(private http:HttpClient) { }


  registre(user:User):Observable<any>{
    return this.http.post(this.API_URL+'/register',user);
  }
  login(user:User):Observable<any>{
    return this.http.post(this.API_URL+'/singin',user);
  }
  changerpassw(user:any): Observable<any> {
    return this.http.post('http://localhost:9000/auth/reset-password',user);
  }

  sendemail(email:any): Observable<any> {
    return this.http.post('http://localhost:9000/auth/forgot-password',email);
}
getAllusers():Observable<any>{
  return this.http.get('http://localhost:9000/user/allusers')
}
update(user:User):Observable<any>{
  return this.http.put('http://localhost:9000/user/allusers/update',user);
}
}
