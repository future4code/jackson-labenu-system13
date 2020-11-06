import {Request, Response} from 'express'
import {insertStudentMission} from '../data/insertStudentMission'
import { validation } from '../utils/globals'

export const addStudentToMission = async (req: Request, res: Response):Promise<void> =>{
    try{
        const{email, missionId} = req.body
        await validation({email, missionId})
        await insertStudentMission(email, missionId)
        res.status(200).send({Success: "Aluno adicionado a missao com sucesso"});

    }   catch(e) {
        res.status(400).send({Error: e.message})
    }
}