import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql', // Khai báo loại DB
        logging: false,    // Tắt log SQL ra terminal nếu muốn sạch sẽ
    }
);

export default sequelize;