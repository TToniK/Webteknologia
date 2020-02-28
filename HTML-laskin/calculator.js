function giveResult(){
    
    operator = document.getElementById("mathSel").value;
    

    if(operator === "+"){
        var field1=document.getElementById("firstNr").value;
        var field2=document.getElementById("secondNr").value;

        var result=parseFloat(field1)+parseFloat(field2);

        document.getElementById("answer").innerHTML="The answer is "+result;
    }
    if(operator === "-"){
        var field1=document.getElementById("firstNr").value;
        var field2=document.getElementById("secondNr").value;
    
        var result=parseFloat(field1)-parseFloat(field2);
    
        document.getElementById("answer").innerHTML="The answer is "+result;
    }
}