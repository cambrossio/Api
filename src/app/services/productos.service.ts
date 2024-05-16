import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Personaje,ResponsePersonaje } from '../interfaces/Personajes';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http:HttpClient
  ) { }
  
  
  getAll():Observable<Personaje[]>{
    return this.http.get<ResponsePersonaje>("https://rickandmortyapi.com/api/character/").pipe(map((value:ResponsePersonaje)=>value.results))
  }

  getById(id:string|null){
    return lastValueFrom(this.http.get("https://rickandmortyapi.com/api/character/"+id))

  }


}
