interface Config{
    apiKey:string;
    timeout:number;
}

type ToBooleanType<T>={
    [key in keyof T]:boolean;
}
type ConfigChanges = ToBooleanType<Config>;