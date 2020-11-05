import { Request, Response } from 'express';
import { createHobby } from '../sql/createHobby';
import { convertDate, createStudent } from '../sql/createStudent';

export const postStudent = async (req: Request, res: Response): Promise<void> =>{
    try{
        const {name, email, birthDate, hobbies} = req.body

        if(!name){
            res.statusCode = 404
            throw new Error("Por favor insira um nome")
        };
        if(!email){
            res.statusCode = 404
            throw new Error("Por favor insira um email")
        };
        if(!birthDate){
            res.statusCode = 404
            throw new Error("Por favor insira data de aniversário")
        };
        if(!hobbies){
            res.statusCode = 404
            throw new Error("Por favor insira seus hobbies")
        };

        const date = convertDate(birthDate);

        await createStudent(name, email, date);


        // await createHobby(hobbies);

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