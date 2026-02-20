type Output = {
    sum:number;
    average:number;
    max:number;
}

function getArrayStats(numbers: number[]):Output{
    if(numbers.length === 0){
        throw new Error("the input should be 1 or more.");
    }
    const sum = numbers.reduce((total, num)=> total + num, 0);
    const max = Math.max(...numbers);
    const average = sum/numbers.length;
    return {sum, average, max};
}

console.log(getArrayStats([10, 20, 30])); // expect { sum: 60, average: 20, max: 30 }


/*
The Output type has three properties, sum, average, max.
The getArrayStats function takes a list of numbers and returns stats based on the Output type.
If the length of the input list equal to 0, This throws an Error.
*/