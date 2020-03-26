import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Ambiente} from "./ambiente";
import {HttpClient} from "@angular/common/http";  //no olvidar los imports
import {Modelstudent} from "../models/modelstudent";


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  ambiente: Ambiente;           //no se lo que hace pero se tiene que poner

  constructor(private http: HttpClient) {
    this.ambiente = new Ambiente();
  }

  
}
