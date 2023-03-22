function myFlat(arr){

    return arr.reduce((acc,elem) => {
        if(Array.isArray(elem))
            return[...acc , ...elem];
        else
            return[...acc, elem];

    },[]);

}