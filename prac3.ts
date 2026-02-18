type Circle = {
    kind:"circle"
    radius:number;
}

type Square = {
    kind:"square";
    sideLength:number;
}
type Rectangle = {
    kind:"rectangle";
    width:number;
    height:number;
}
type Shape = Circle|Square|Rectangle;

function getArea(shape:Shape):number{
    switch(shape.kind){
        case "circle":
            return shape.radius**2 * Math.PI;
        case "square":
            return shape.sideLength**2;
        case "rectangle":
            return shape.width * shape.height;
        default:
            const _exhaustiveCheck:never = shape;
            return _exhaustiveCheck;
    }
}

const circle:Shape = {
    kind:"circle",
    radius:2
}
const square:Shape = {
    kind:"square",
    sideLength:3
}

console.log(getArea(circle));
console.log(getArea(square));