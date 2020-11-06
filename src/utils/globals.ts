export const convertDate = (date: string): string =>{
    const [day, month, year] = date.split("/");
    const newDate: string = `${year}-${month}-${day}`;

    return newDate
};

export const validation = async (body: {}): Promise<void> =>{
    const bodyNames: string[] = Object.keys(body);
    const bodyValues: string[] = Object.values(body);

    for(let i = 0; i < bodyValues.length; i++){
        if(!bodyValues[i]){
            throw new Error(`"${bodyNames[i]}" deve ser preenchido`)
        }
    }
};