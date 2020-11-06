import { connection } from '../index';
import { Main } from '../types/types';

export const selectStudent = async (email: string): Promise<any> =>{
    const result = await connection.raw(`
        SELECT id FROM student WHERE email = "${email}";
    `)
    return result[0][0]
}