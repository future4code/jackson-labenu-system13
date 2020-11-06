import { connection } from '../index';

export const selectAgeById = async (id: number): Promise<any> =>{
    const age = await connection.raw(`
        SELECT DATEDIFF(CURDATE(), birth_date)/ 365 as age
        FROM students 
        WHERE id = ${id};
    `)

    console.log("a idade é:", age)
    return age[0][0]

}