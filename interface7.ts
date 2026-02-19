export interface Notification{
    id:string;
    type:Type;
    message:string;
    isRead:boolean;
    priority:Priority
}
type Priority = 1|2|3|4|5;
type Type = "info"|"success"|"warning"|"error";