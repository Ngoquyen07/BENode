import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

// Định nghĩa model : Student
const Student = sequelize.define('Student', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
        tableName: 'students',
        timestamps: false,
    }
);
export default Student;
