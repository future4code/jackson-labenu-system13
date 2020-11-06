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

