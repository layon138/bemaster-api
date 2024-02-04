
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
    likes?:string[];
    id:string;
}

export interface Comment{
    user:string;
    description:string;
}

export interface CommentCreateRequestInterface{
    userId:string;
    videoId:string;
    description:string;
}

export interface CommentCreateInterface{
    id:string;
    userId:string;
    videoId:string;
    description:string;
    dateCreated:string;
}

export interface LikeCreateRequestInterface{
    userId:string;
    videoId:string;
}

export interface LikeCreateInterface{
    id:string;
    dateCreated:string;
    userId:string;
    videoId:string;
}

