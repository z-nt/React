const arrayObject = [
    ali={name:"ali" , age :20},
    mammd={name:"mammad" , age :21},
    kian={name:"kian" , age :22},
    erfan={name:"erfan" , age :23},
]



function addusers(arr){
    const  mobin ={name:"mobin" , age:24}
    
    for(var i = 0 ; i < arr.length ; i++){
        console.log(arr[i]);
        if(arr[i] == mobin){
            console.log("hastesg");
        }else{
            arr.push(mobin);
            console.log(arr);
            break;
        }

    }

}

addusers(arrayObject);