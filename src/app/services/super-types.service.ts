import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SuperTypesService {

  private UrlAPISegment = 'supertypes'
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(`${environment.api_url}\\${this.UrlAPISegment}`).pipe(map((data:any)=>(data.data)));
  }
}
