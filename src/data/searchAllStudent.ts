import { connection } from '../index';
import { Main } from '../types/types'

export async function searchAllStudent():Promise<Main> {
    try{
        const result = await connection.raw(`
        SELECT * FROM student
        `)
        return result[0]
    }catch(error) {
        throw new Error (error.sqlMessage)

    }
    
}
