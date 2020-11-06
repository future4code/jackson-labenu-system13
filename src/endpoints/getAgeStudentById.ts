import {Request, Response} from 'express';
import { selectAgeById } from '../data/selectAgeById';
import { validation } from '../utils/globals';

export const getAgeStudentById = async (req: Request, res: Response) =>{
    try{
        const id  = req.params.id

        await validation({id})

        const { age } = await selectAgeById(Number(id))

        if(!age){
            res.statusCode = 404
            throw new Error("Not Found")
        }

        const response = {age: Math.trunc(age)}

        res.status(200)
        .send(response)
    }
    catch(error){
        res.send(error.message)
    }
}
