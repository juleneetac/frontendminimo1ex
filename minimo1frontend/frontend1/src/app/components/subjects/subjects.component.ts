import {Component, OnInit } from '@angular/core';
import {Modelsubject} from "../../models/modelsubject";
import {SubjectsService} from "../../services/subjects.service";
import {StudentsService} from "../../services/students.service";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private subjectService: SubjectsService, private studentService: StudentsService) {} 
    subjects: Modelsubject[];

  ngOnInit() {
    //this.getSubjects();
  }
  //obtengo estudiantes de una asignatura
  public getSubjects(){
    this.subjectService.getSubjects().subscribe(
      (data) => {
        this.subjects = data;
        console.log(this.subjects);
      },
      (err) => {
        console.log("err", err);
      }
    )  //el subject service es el declarado arriba en private
  }

}
