n = 5


const no_zero = (x)=>{
    count = 0
    while(x>0){
        if(x%10==0){
            count = count +1;
            x = parseInt(x/10)
        }
        else{
            x= parseInt(x/10)
        }
    }

    console.log('count of zeros: ',count)
}


no_zero(n)


const facto = (x)=>{
    fac = 1
    while(x>0){
        fac *=x
        x = x-1
    }

    console.log('factorial of',x,'is: ',fac)
}

facto(n)