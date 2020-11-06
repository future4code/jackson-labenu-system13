import { connection } from '../index';

export const selectAgeById = async (id: number): Promise<any> =>{
    const age = await connection.raw(`
        SELECT DATEDIFF(CURDATE(), birth_date)/ 365 as age
        FROM student
        WHERE id = ${id};
    `)

    return age[0][0]

}