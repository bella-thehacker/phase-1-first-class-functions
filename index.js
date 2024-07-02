function receivesAFunction(world){
    console.log("Hello World!");
    world();
}

function Spy(){
    console.log("spy");
}

receivesAFunction(Spy);

function returnsANamedFunction(){
   
    console.log(NamedFunction)
    return(NamedFunction);
}

function NamedFunction(){
    return "Help"
}
returnsANamedFunction()

function returnsAnAnonymousFunction(){
    return function(){
        console.log("I hope this works");
    }

}

const Unknown = returnsAnAnonymousFunction();
Unknown();