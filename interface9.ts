export type Book = {
    id:number;
    title:string;
    author:string;
    publishedYear:number;
    rawServerLog:string;
}
export type BookDisplay = Omit<Book, "rawServerLog">&{isClassic:boolean};