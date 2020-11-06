import {Request, Response} from 'express'
import {insertTeacher} from '../data/insertTeacher'
import {Main} from '../types/types'
import { validation } from '../utils/globals'

export const createTeacher = async (req:Request, res:Response):Promise<void> =>{
    try {
        const {name, email, birthDate, missionId} = req.body
        
        await validation({name, email, birthDate, missionId})
        
        const body: Main = {
            name,
            email,
            birth_date: birthDate,
            mission_id: missionId
        }
        
        await insertTeacher(body)

        res.status(200).send({Success: "The Teacher was created"});

    } catch (error) {
        res.status(400).send({Error: error.message});
    }
}