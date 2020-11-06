import { connection } from "../index";
import {Mission} from '../types/types';

const formattedDate = (date: string): string =>{
    const [dd, mm, yyyy] = date.split("/")
    const newDate: string = (`${yyyy}-${mm}-${dd}`) 
    
    return newDate
}

export const insertMission = async (query: Mission): Promise<any> =>{
    try{
        const result = await connection.raw(`
        INSERT INTO mission (name, start_date, end_date, module)
        VALUES(
            "${query.name}",
            "${formattedDate(String(query.start_date))}",
            "${formattedDate(String(query.end_date))}",
            "${query.module}"
        );
    `)

    return result[0]

    } catch(error) {
        throw new Error (error.sqlMessage)
    }
};