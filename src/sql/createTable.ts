import { connection } from "../index";

export const createTable = async (): Promise<void> =>{
    try{
        await connection.raw(`
            CREATE TABLE teacher_especialty(
                teacher_id INT NOT NULL,
                specialty_id INT NOT NULL,
                PRIMARY KEY (teacher_id, specialty_id),
                FOREIGN KEY (teacher_id) REFERENCES teacher (id),
                FOREIGN KEY	(specialty_id) REFERENCES especialty(id)
            );
        `)
        console.log("sucesso")
    }
    catch(error){
        console.log(error)
    }
};

createTable()