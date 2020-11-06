import { connection } from '../index';

export const student_hobby = async (
    idStudent: number, 
    idHobby: number
    ): Promise<void> =>{
    await connection.raw(`
        INSERT INTO student_hobby
        VALUES (
            ${idStudent},
            ${idHobby}
        );
    `)
}