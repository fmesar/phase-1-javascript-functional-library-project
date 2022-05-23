const { cloneElement } = require("react")

function myEach(collection, callback) {
    const collectionArr = Object.values(collection)
    for(const value of collectionArr){
        callback(value)
    }
    return collection
}

function myMap(collection, callback){
    const collectionArr = Object.values(collection)
    const array = []
    for(const value of collectionArr){
      array.push(callback(value))
    }
    return array
} 
function myReduce(collection, callback, acc){
    const collectionArr = Object.values(collection)
    
    if(acc === undefined){
        acc = collectionArr[0]
        collectionArr.shift()
    }
    for(const value of collectionArr){
        
        acc = callback(acc, value, collectionArr)

    }
    return acc
}
function myFind (collection, predicate){
    const collectionArr = Object.values(collection)

        for(const value of collectionArr){
                
            if(predicate(value)=== true)
        {
            return value
        }
    }
}
function myFilter (collection, predicate){
    const collectionArr = Object.values(collection)
    let result = []
        for(const value of collectionArr){
                
            if(predicate(value)=== true)
        {
            result.push(value)
        }
    } return result
}
function mySize(collection){
    const collectionArr = Object.values(collection)
    return collectionArr.length
}
function myFirst(array, n = false){
    if(!n){
        return array[0]
    }
   return array.slice(0, n) 
}


function myLast(array, n = false){
    if(!n){
        return array[array.length-1]
    }
   return array.slice(array.length-n, array.length) 
}
function myKeys(object){
    let results = [];
    for (let key in object){
        results.push(key)
    }
    return results
}


function myValues(object){
    let results = [];
    for (let key in object){
        results.push(object[key])
    }
    return results
}