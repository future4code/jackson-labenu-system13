import { connection } from "../index";
import {Mission} from '../types/types';
import { convertDate } from "../utils/globals";


export const insertMission = async (query: Mission): Promise<any> =>{
    try{
        const result = await connection.raw(`
        INSERT INTO mission (name, start_date, end_date, module)
        VALUES(
            "${query.name}",
            "${convertDate(String(query.start_date))}",
            "${convertDate(String(query.end_date))}",
            "${query.module}"
        );
    `)

    return result[0]

    } catch(error) {
        throw new Error (error.sqlMessage)
    }
};