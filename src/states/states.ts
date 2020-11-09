export interface UserState{
    email:string,
    password:string
}


//this will define the userprofile information
export interface UserInfo{
    email:string,
    photo: any,
    firstname: string,
    lastname:string,
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