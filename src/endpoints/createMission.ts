import {Request, Response} from 'express'
import {insertMission} from '../data/insertMission'
import {Mission} from '../types/types'

export const createMission = async (req: Request, res: Response): Promise<void> => {
    try{
        const {name, startDate, endDate, moduleClass} = req.body

        if (!name || !startDate || !endDate || !moduleClass){
            throw new Error("Incorrect request body - informacao errada ou faltando")
        }

        const body: Mission = {
            name,
            start_date: startDate,
            end_date: endDate,
            module: moduleClass
        }

        await insertMission(body)

        res.status(200).send({Sucess: "The Mission was created - A Missao/Turma foi criada"});

    } catch (error) {
        res.status(400).send({Error:error.message});

    }
}