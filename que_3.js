const my_sub = (x,y,z)=>{
    sub = ''
    for(i = y;i<z;i++){
        sub +=x[i]
        console.log(sub)
    }
}

x = 'akshay'

my_sub(x,2,4)