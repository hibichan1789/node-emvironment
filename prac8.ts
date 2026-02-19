import type {User, ApiResponse} from "./interface8";

class DataProcessor<T>{
    public formatName(user:User):string{
        return `${user.firstName} ${user.lastName}`;
    }
    public isValidResponse(response:any):response is ApiResponse<T>{
        const status = response?.status;
        return status === "success" || status === "error";
    }
    public processData(response:ApiResponse<T>){
        if(response.status === "success"){
            return response.data;
        }
        throw new Error("something with wrong it");
    }
}

const sampleUser:User = {
    id:1,
    firstName:"aaaa",
    lastName:"bbbb",
    email:"@gmail.com"
}
const response:ApiResponse<User> = {status:"success", data:sampleUser, timestamp:1000000};
const errorResponse:ApiResponse<User> = {status:"error", timestamp:10000000000};
const processor = new DataProcessor<User>();
console.log(processor.formatName(sampleUser));
console.log(processor.isValidResponse({id:10, firstName:"aajij", lastName:"joij", email:"@"}));
console.log(processor.processData(response));
console.log(processor.processData(errorResponse));