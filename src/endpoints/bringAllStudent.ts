import { Request, Response} from "express"
import { searchAllStudent } from "../data/searchAllStudent"
import { Main } from "../types/types"

export const bringAllStudent = async (req: Request, res: Response) => {
    try{
        const studentsAll: Main[]  = await searchAllStudent()

        if(!studentsAll.length) {
            res.statusCode = 404
            throw new Error("Alunos nao encontrado")
        }
        res.status(200).send(studentsAll)

    }catch (e) {
        res.send(e.message)
    }

}