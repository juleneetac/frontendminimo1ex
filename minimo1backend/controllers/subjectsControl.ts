'use strict';

let SubjectsSchema = require('../models/Subjects');
let StudentsSchema = require('../models/Students');
let mongoose = require('mongoose');
let ObjectId = require('mongodb').ObjectID;  //para usar el 9id directamente
import {Request, Response } from 'express';

async function getSubjects (req, res){   //me da el nombre de todas las asignaturas
    let subject = await SubjectsSchema.find().select('name');
    console.log(subject);
    if(subject) {
        res.status(200).json(subject);
    } else {
        res.status(424).send({message: 'Subjects error'});
    }
}

async function getStudentfrom (req, res){
    let _id = req.params.subjectId;  //el req.params crea un parametro que llamaremos subjectId
    // req.params es para get
    let subject = await SubjectsSchema.findById(_id).populate('students', 'name'); 
    //la asignatura de la cual quiero buscar sus estudiantes, depende de el id que le pase como parametro
    console.log(subject);
    if(subject) {
        res.status(200).json(subject);
    } else {
        res.status(424).send({message: 'Subjects error'});
    }
}
async function hello (req: Request, res:Response){
    
    const s_aux: string = req.body.msg;
    console.log('texto', s_aux);
    res.status(200).json(s_aux);
}

async function hello2 (req: Request, res:Response){
    
    const s_aux: string = req.params.msg;
    console.log('texto', s_aux);
    res.status(200).json(s_aux);
}

 async function putStudentinSubject (req: Request, res:Response){   //añado un alumno a una asignatura
    //si el alumno no existe me da error
    try{
    console.log('thola');
    const s_aux: string = req.body.subject;   //req.body es para post que le paso un json
    const st_aux: string = req.body.student;
    console.log('texto', s_aux);
    console.log('texto',st_aux);
    
    console.log('put student in subject', req.body);
    let subject = req.body.subject;  //me da el subject entero
    let student = await StudentsSchema.findOne({name: req.body.student.name});  
    //let studentId = req.body.studentId; 
    //let studentFound = await StudentsSchema.findById(studentId);  //busca al student por su id
    //let student = await StudentsSchema.findOne({name: req.body.student.name});
    if (!student) {
        return res.status(404).send({message: 'Student not found'})
    }
    else{

         let result = await SubjectsSchema.updateOne({name: subject.name}, {$addToSet:{students: ObjectId(student._id)}})
         res.status(200).send(result);
         res.status(200).send({message: "Student added successfully to the station"})
        }
    }
    catch(err){
         console.log(err);
         res.status(500).send(err)
    }
}

async function getStudentDetails (req, res){   //ver detalle de un alumno dentro de una asignatura
    try {
        let _id = req.params.studentId;
        let student = await StudentsSchema.findById(_id);
        if(!student){
            return res.status(404).send({message: 'student not found'});
        }else{
            res.status(200).send(student);
        }
    } catch(err) {
        res.status(500).send(err);
    }
}

// async function getStudentEA (req, res){
//     let subject = await SubjectsSchema.findOne({name:'EA'}).populate('students', 'name'); 
//     //me da los estudiantes de la asignatura de EA con el nombre solo, si no pongo name me da toda la info del student
//     console.log(subject);
//     if(subject) {
//         res.status(200).json(subject);
//     } else {
//         res.status(424).send({message: 'Subjects error'});
//     }
// }


module.exports = {getSubjects, getStudentfrom, putStudentinSubject, getStudentDetails, hello, hello2};