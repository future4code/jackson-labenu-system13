import { connection } from '../index';

export const createHobby = async (name: string): Promise<void> =>{
    try{
        await connection.raw(`
            INSERT INTO hobby (name)
            VALUES (
                "${name}"
            );
        `)
        console.log("sucesso!")
    }
    catch(error){
        console.log(error)
    }
};