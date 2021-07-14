export function EnableWsNotification(): Function {
    return function (targetClass: any, functionName: string, descriptor: any) {

        targetClass["askForWSNotificaiton"].call(this);
        return descriptor;
    };
}