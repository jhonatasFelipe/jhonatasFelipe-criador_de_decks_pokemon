import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import Card from '../Classes/Card';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  private UrlAPISegment = '\cards'
  constructor(private Http:HttpClient) { }

  getByID(id:string){
    return this.Http.get(`${environment.api_url}\\${this.UrlAPISegment}\\${id}`).pipe(map((data:any)=>(data.data)));
  }

  get(params:any){
    return this.Http.get(`${environment.api_url}\\${this.UrlAPISegment}`,{params:params});
  }
}
