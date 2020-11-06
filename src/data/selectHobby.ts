import { connection } from '../index';

export const selectHobby = async (hobbies: string): Promise<any> =>{
    const hobbyId = await connection.raw(`
        SELECT id FROM hobby WHERE name = "${hobbies}";
    `)

    return hobbyId[0][0]
} 