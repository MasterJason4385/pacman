function rand(a,b,c){
    if(a==null){
        return(Math.random());
    }else if(b==null){
        return(Math.floor(Math.random()*a));
    }else if(c){
        return(Math.floor((Math.random()*(b-a))+a));
    }else{
        return((Math.random()*(b-a))+a);
    }
}