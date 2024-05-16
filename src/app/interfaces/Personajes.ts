export interface Personaje{
    id:number;
    created:string;
    gender:string;
    image:string;
    name:string;
    species:string;
    status?:string;
    type?:string;
    location:{
        name:string;
    }
    origin:{
        name:string;
    }
}

export interface ResponsePersonaje{
    results:Personaje[]
}
