import 'dotenv/config';
import app from "./app.js";
const PORT = process.env.PORT || 8000;
import sequelize from "../src/config/database.js";
const startServer = async () => {
    try{
        await sequelize.authenticate();
        console.log("Database Connected");

        await sequelize.sync({ alter: true });
        console.log("Database synced");

        app.listen(PORT, () => {
            console.log("Server started on port: " + PORT);
        })
    }
    catch (error) {
        console.error(error);
    }
}
startServer();