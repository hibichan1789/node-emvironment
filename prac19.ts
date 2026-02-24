type LogLevel = "info"|"warning"|"error";
type Log = {
    level:LogLevel;
    id:number;
    message:string;
    timestamp:number;

}
function getCriticalLogs(logs:Log[]):string[]{
    return logs.filter(log => log.level !== "info").map(log => `[${log.level}] ${log.message}`);
}
const logs: Log[] = [
    { id: 1, message: "System started", level: "info", timestamp: 1625097600 },
    { id: 2, message: "Low disk space", level: "warning", timestamp: 1625097700 },
    { id: 3, message: "Database connection failed", level: "error", timestamp: 1625097800 }
];

console.log(getCriticalLogs(logs));

/*
i.e.すなわち
based on the condition 条件に基づいて
*/

/*
The Loglevel type is a union type which allows "info", "warning", or "error".
The Log type consists of four properties:level, id, message, and timestamp.
The getCriticalLogs function takes an array of objects based on the Log type.
It iterates through the array, filters each element to extract the element whose level is "warning" or "error".
It converts the filtered array into a new string array that inform the level and the message in the element. 
*/