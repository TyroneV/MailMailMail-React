export interface UserState{
    id:number,
    email:string,
    password: string,
    firstName: string,
    lastName:string,
    photo: string
}


//this will define the userprofile information
export interface UserInfo{
    id:number,
    password: string,
    firstName: string,
    lastName:string,
    photo: string
}

export interface Post{
    id: number,
    content: string,
    photo: string,
    authorId: number,
    dateCreated: Date
}

export interface Posts{
    posts: Post[]
    
}