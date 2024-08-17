import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationServicService {
  API_URL="http://localhost:9000/formation"
  constructor(private http:HttpClient) { }


  addFormation(formation:any):Observable<any>{
    return this.http.post(this.API_URL+"/add",formation)
  }
  deletFormation(id:any):Observable<any>{
    return this.http.delete(this.API_URL+"/delete/"+id)
  }
  getAllformation():Observable<any>{
    return this.http.get('http://localhost:9000/formation/getall')
  }
  update(formatio:any):Observable<any>{
    return this.http.post(this.API_URL+"/update",formatio)
  }
}
