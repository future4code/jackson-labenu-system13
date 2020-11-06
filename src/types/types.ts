export type Main = {
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
    name: string,
    start_date: Date,
    end_date: Date,
    module: number
}



