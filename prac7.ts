import type { Notification } from "./interface7";

function filterNotification(notifications:Notification[], options?:Partial<Pick<Notification, "type"|"priority"|"isRead">>){
    if(!options){
        return notifications;
    }
    let filteredNotifications = notifications
    
    const type = options.type;
    if(typeof type !== "undefined"){
        filteredNotifications = filteredNotifications.filter(notification =>notification.type === type)
    }
    const priority = options.priority;
    if(typeof priority !== "undefined"){
        filteredNotifications = filteredNotifications.filter(notification => notification.priority === priority)
    }
    const isRead = options.isRead;
    if(typeof isRead !== "undefined"){
        filteredNotifications = filteredNotifications.filter(notification => notification.isRead === isRead);
    }
    return filteredNotifications;
}

const sampleNotification:Notification[] = [
    {
        id:"101",
        type:"warning",
        message:"sample",
        isRead:true,
        priority:3
    },
    {
        id:"102",
        type:"info",
        message:"sample",
        isRead:true,
        priority:2
    },
    {
        id:"103",
        type:"warning",
        message:"sample",
        isRead:false,
        priority:5
    },
    {
        id:"104",
        type:"warning",
        message:"sample",
        isRead:true,
        priority:5
    },
]

console.log(sampleNotification);
console.log(filterNotification(sampleNotification, {type:"warning",isRead:true}))