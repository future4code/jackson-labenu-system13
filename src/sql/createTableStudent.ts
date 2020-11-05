import { connection } from "../index";

export const createTableStudent = async (): Promise<void> =>{
    try{
        await connection.raw(`
            CREATE TABLE students(
                id INT AUTO_INCREMENT NOT NULL,
                name VARCHAR(50) NOT NULL,
                email VARCHAR(50) NOT NULL UNIQUE,
                birth_date DATE NOT NULL,
                mission_id INT,
                PRIMARY KEY (id)
                FOREING KEY (mission_id) REFERENCES mission(id)
            );
        `)
        console.log("sucesso")
    }
    catch{
        console.log("erro")
    }
};

createTableStudent()