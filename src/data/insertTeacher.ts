import { connection } from "../index";
import {Main} from '../types/types';
import { convertDate } from "../utils/globals";

export const insertTeacher = async (query: Main): Promise<any> =>{
    try {
        const result =  await connection.raw(`
            INSERT INTO teacher (name, email, birth_date, mission_id)
            VALUES (
                "${query.name}",
                "${query.email}",
                "${convertDate(String(query.birth_date))}",
                ${query.mission_id}
            );
        `)
    
        return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage)
    }  
};