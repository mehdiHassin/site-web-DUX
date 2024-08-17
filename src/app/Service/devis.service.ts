import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Devis } from '../models/Devis.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  private apiUrl = 'http://localhost:9000/api/forms';

  constructor(private http: HttpClient) { }

  submitForm(userForm: Devis): Observable<Devis> {
    return this.http.post<Devis>(this.apiUrl, userForm);
  }
  getAllDevis():Observable<any>{
    return this.http.get('http://localhost:9000/api/forms/all')
  }
}
