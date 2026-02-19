//interface8.ts
export interface User{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
}

type SuccessResponse<T> = {
    status:"success";
    data:T;
    timestamp:number;
}
type ErrorResponse = {
    status:"error";
    timestamp:number;
}
export type ApiResponse<T> = SuccessResponse<T>|ErrorResponse;