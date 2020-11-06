import { connection } from '../index';

export const selectAllStudent = async (id: number): Promise<any> =>{
    const result = await connection.raw(`
        SELECT id FROM student
        WHERE id = ${id};
    `)

    return result[0]
}