import {Request, Response} from 'express'
import {insertTeacherMission} from '../data/insertTeacherMission'
import { validation } from '../utils/globals'

export const addTeacherToMission = async (req:Request, res:Response):Promise<void> =>{
    try {
        const {email, missionId} = req.body
        
        await validation({email, missionId})
        
        await insertTeacherMission(email, missionId)

        res.status(200).send({Success: "Add teacher to mission"});

    } catch (error) {
        res.status(400).send({Error: error.message});
    }
}