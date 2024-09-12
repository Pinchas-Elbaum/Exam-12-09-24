const Mission1 = (arr) => {
    const result = [];
    arr.forEach(element => {
        if(element % 2 === 0){
            result.push(element);}  })

    return result
}
    

const Mission2 = (arr) => {

    let counter = 0;
    const wordArr = arr.split(' ');
    wordArr.forEach(element => {
        if (element.length === 4){
            counter += 1    
        }})
    return counter
}


const Mission5 = (Keys, Values) =>{

    const result = {};

    for(let i = 0; i < Keys.length; i++){
        result[Keys[i]] =  Values[i]
    } 

return result;
}

const Mission6 = (num) => {

    if(num <= 1){
        return num
    }

    return Mission6(num - 1) + Mission6(num - 2)
}

// console.log( Mission1([-200, -163, -26, -4, 0, 7, 76]))
// console.log(Mission2('tis is1 a test'))
// console.log(Mission5(['a', 'b', 'c'], [1, 2, 3]))
// console.log(Mission6(5))


module.exports = {
    Mission1,
    Mission2,
    Mission5,
    Mission6
}