import type { Book, BookDisplay } from "./interface9";

function convertToDisplay(books:Book[]):BookDisplay[]{
    return books.map(book => {
        const isClassic = book.publishedYear < 2000;
        const {rawServerLog,...withoutLog} = book;
        return {...withoutLog, isClassic}
    });
}
async function fetchData<T>(apiUrl:string):Promise<T>{
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new Error("can not fetch data");
    }
    const data:T = await response.json();
    return data;
}

const mockServerBooks: Book[] = [
    {
        id: 1,
        title: "坊っちゃん",
        author: "夏目漱石",
        publishedYear: 1906,
        rawServerLog: "ACCESS_LOG_001: OK"
    },
    {
        id: 2,
        title: "TypeScript実践ガイド",
        author: "エンジニア太郎",
        publishedYear: 2024,
        rawServerLog: "ACCESS_LOG_002: OK"
    },
    {
        id: 3,
        title: "人間失格",
        author: "太宰治",
        publishedYear: 1948,
        rawServerLog: "ACCESS_LOG_003: OK"
    },
    {
        id: 4,
        title: "2045年の技術",
        author: "未来子",
        publishedYear: 2026,
        rawServerLog: "ACCESS_LOG_004: OK"
    }
];
const displayBooks = convertToDisplay(mockServerBooks);
console.log(displayBooks);