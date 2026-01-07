import Student from "../models/student.model.js";
import { Op } from 'sequelize';
export const createStudent = async (req, res) => {
    try{
        const student = await Student.create(req.body);
        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: student,
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}
export const updateStudent = async (req, res) => {
    try{
        const id = req.params.id;
        const [updated] = await Student.update(req.body,{
            where: {
                id: id
            }
        })
        if (updated === 0) {
            return res.status(404).json({
                success: false,
                message: "Student not found"

            })
        }
        const student = await Student.findByPk(id) ;
        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: student,
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}
export const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        await Student.destroy({where: {id: id}});
        res.status(200).json({
            success: true,
            message: "Student deleted successfully",

        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

export const searchStudent = async (req, res) => {
    try {
       // Get Search query
        const { query } = req.query;
        if (!query) {
            return res.status(400).json({
                success: false,
                message: "Something went wrong",
            });
        }

        const students = await Student.findAll({
            where: {
                [Op.or]: [
                    {
                        id: query
                    },
                    {
                        name: {
                            [Op.like]: `%${query}%`
                        }
                    }
                ]
            }
        });

        res.status(200).json({
            success: true,
            data: students
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.status(200).json({
            success: true,
            data: students
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
