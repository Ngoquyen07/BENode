import {Router} from "express";
import { createStudent, updateStudent, deleteStudent , searchStudent , getAllStudents }  from "../controllers/student.controller.js";
import validate from "../middlewares/validate.js";
import studentValidation from "../validations/studentValidation.js";
export const studentRouter = Router();
studentRouter.get('/:search',searchStudent)
studentRouter.get('/',getAllStudents) ;
studentRouter.post('/',validate(studentValidation),createStudent) ;
studentRouter.put('/:id',validate(studentValidation),updateStudent) ;
studentRouter.delete('/:id',deleteStudent) ;

