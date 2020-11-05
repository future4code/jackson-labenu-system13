import { connection } from '../index';

export const createStudent = async (
    name: string, 
    email: string, 
    birthDate: string
    ): Promise<void> =>{
    try{
        await connection.raw(`
            INSERT INTO students
            (name, email, birth_date)
            VALUES (
                "${name}",
                "${email}",
                "${birthDate}"
            );
        `)
        console.log("sucesso")
    }
    catch(error){
        console.log(error)
    }
};

export const convertDate = (date: string): string =>{
    const [day, month, year] = date.split("/");
    const newDate: string = `${year}-${month}-${day}`;

    return newDate
}