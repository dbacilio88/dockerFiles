import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {


  URI: string = 'http://localhost:8000/api'

  constructor(
    private http: HttpClient
  ) { }


  findall() {
    return this.http.get(this.URI+"/findall");
  }
}
