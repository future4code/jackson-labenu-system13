import { connection } from '../index';

export const createStudent = async (
    name: string, 
    email: string, 
    birthDate: string,
    mission_id: number
    ): Promise<void> =>{
    await connection.raw(`
        INSERT INTO students
        (name, email, birth_date, mission_id)
        VALUES (
            "${name}",
            "${email}",
            "${birthDate}",
            ${mission_id}
        );
    `)
    console.log("sucesso")
};

