const displayContent=(data)=>{
    output.value+=data
}

const clearAllContent=()=>{
    output.value=""
    output.placeholder="0"
}

const backSpace=()=>{
    output.value=output.value.slice(0,-1);  //slice method is used to delete the last data '-1' means the number on last

}

const equals=()=>
{
    try{
        console.log("try block")
        output.value=eval(output.value)  //eval is used to evaluate an expression that we entered (ie, *=multi, += add, -= sub, /=divide)

    }
    catch(err)
    {
        console.log("Catch Block");
        console.log(err);
        output.value=""
        output.placeholder="Invalid expression"
    }
    finally{
        console.log("Finally");
        console.log("task Completed");
    }
}