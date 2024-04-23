const resultInput = document.getElementById('result') as HTMLInputElement;



function addToResult(char:string):void
{
    resultInput.value+=char;
}

function clearResult():void{
    resultInput.value='';
}

function calculate():void{
    try{
        resultInput.value=eval(resultInput.value);
    }
    catch(error)
    {
        resultInput.value='error';
    }
}
  
  
