import { connection } from "../index";

export const insertTeacherMission = async (email:string, missionID:number): Promise<any> =>{
    try {
        const result =  await connection.raw(`
            UPDATE teacher SET
            mission_id = ${missionID}
            WHERE email =  "${email}";
        `)
    
        return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage)
    }  
};