import { connection } from "../index";
import {Teacher} from '../types/types';

const formattedDate = (date: string): string =>{
    const [dd, mm, yyyy] = date.split("/")
    const newDate: string = (`${yyyy}-${mm}-${dd}`) 
    
    return newDate
}

export const insertTeacher = async (query: Teacher): Promise<any> =>{
    try {
        const result =  await connection.raw(`
            INSERT INTO teacher (name, email, birth_date, mission_id)
            VALUES (
                "${query.name}",
                "${query.email}",
                "${formattedDate(String(query.birth_date))}",
                ${query.mission_id}
            );
        `)
    
        return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage)
    }  
};