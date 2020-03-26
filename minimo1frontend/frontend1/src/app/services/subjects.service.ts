import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Ambiente} from "./ambiente";
import {HttpClient} from "@angular/common/http";
import {Modelsubject} from "../models/modelsubject";
import {Modelstudent} from "../models/modelstudent";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  ambiente: Ambiente;           //no se lo que hace pero se tiene que poner

  constructor(private http: HttpClient) {
    this.ambiente = new Ambiente();
  }

  getSubjects(): Observable<Modelsubject[]>{  //esto es el observable
    return this.http.get<Modelsubject[]>(this.ambiente.urlSubject + '/getSubjects');  
    //me lleva a la ruta que me da todas las asignaturas y se llama como en el backend
    // this.ambiente.urlSubject == http://localhost:3000/asignaturas
    }
}
