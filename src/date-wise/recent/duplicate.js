/**
 * duplicate([1,2,43,54]) => [1,2,43,54,1,2,43,54]
 */
function duplicate(array){
    return [...array,...array];
}

function duplicate1(array){
    let  a = array.map(value=>value);
    return a.concat(array);
}
