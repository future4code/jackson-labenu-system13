import { Request, Response } from 'express';
import { createHobby } from '../data/createHobby';
import { createStudent } from '../data/createStudent';
import { convertDate, validation } from '../utils/globals';

export const postStudent = async (req: Request, res: Response): Promise<void> =>{
    try{
        const {name, email, birthDate, hobbies, mission_id} = req.body

        await validation({name, email, birthDate, hobbies, mission_id})

        const date = convertDate(birthDate);

        await createStudent(name, email, date, mission_id);
        

        await createHobby(hobbies);

        res.status(200)
        .send("Estudante adicionado com sucesso")
    }
    catch(error){
        if (error.sqlMessage && error.sqlMessage.includes(`for key 'email'`)) {
            res.send("Este email já está cadastrado!");
        }
        res.send(error.message)
    }
};