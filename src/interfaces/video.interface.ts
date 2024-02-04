
export interface VideoCreateRequestInterface{
    titulo:string;
    description:string;
    credit:string;
    url:string;
    public:boolean;
}

export interface VideoCreateInterface{
    titulo:string;
    description:string;
    credit:string;
    public:boolean;
    dateCreated:string;
    commets?:Comment[];
    likes?:Like[];
    id:string;
}

export interface Comment{
    user:string;
    description:string;
}

export interface Like{
    user:string;
    calification:number;
}