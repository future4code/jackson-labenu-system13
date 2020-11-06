export type Main = {
    id: number,
    name: string,
    email: string,
    birth_date: Date,
    mission_id: number
}

export type Teacher = {
    name: string,
    email: string,
    birth_date: Date,
    mission_id: number
}

export enum ESPECIALT {
    REACT,
    REDUX,
    CSS,
    TESTES,
    TYPESCRIPT,
    DOM,
    BACKEND
}

export type Mission = {
    //id: number,
    name: string,
    start_date: Date,
    end_date: Date,
    module: number

}



