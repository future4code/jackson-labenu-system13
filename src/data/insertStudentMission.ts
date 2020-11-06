import { connection } from "../index";

export const insertStudentMission = async (email: string, missionID: number): Promise<any> => {
    try{
        const result = await connection.raw(`
            UPDATE student SET
            mission_id = ${missionID}
            WHERE email = "${email}"
        `)
        return[0]

    }   catch(error) {
        throw new Error(error.sqlMessage)
    }
};