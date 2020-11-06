import {Request, Response} from 'express'
import {insertTeacher} from '../data/insertTeacher'
import {Teacher} from '../types/types'

export const createTeacher = async (req:Request, res:Response):Promise<void> =>{
    try {
        const {name, email, birthDate, missionId} = req.body
        
        if(!name || !email || !birthDate || !missionId){
            throw new Error("Incorrect request body")
        }
        
        const body: Teacher = {
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