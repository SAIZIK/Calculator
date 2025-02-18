const btns = document.getElementById('clac');
const output = document.getElementById('output');
let outputReset = 0;

btns.addEventListener("click",(event)=>
{
  if(event.target.classList.contains('number'))
    {
      if(outputReset == 1)
      {
        output.innerText = ""; // clear the output
        outputReset = 0; // reset outputReset
      }
      output.innerText += event.target.innerText;
    }
    else if(event.target.classList.contains('operator'))
    {
      if(output.innerText[output.innerText.length-1] == "+" || output.innerText[output.innerText.length-1] == "-" || output.innerText[output.innerText.length-1] == "*" || output.innerText[output.innerText.length-1] == "/")
      {
        output.innerText = output.innerText.replace(output.innerText[output.innerText.length-1],event.target.innerText);
      }
      else
      {
        output.innerText += event.target.innerText;
      }
    }
    else if(event.target.classList.contains('c'))
    {
      output.innerText = '';
    }
    else if(event.target.classList.contains('del'))
    {
      output.innerText = output.innerText.slice(0, -1);
    }
    else if(event.target.classList.contains('eq'))
    {
      try {
        output.innerText = eval(output.innerText);
        outputReset = 1; // set outputReset to 1
        output.innerText = output.innerText.slice(0, 13);
      } catch (error) {
        outputReset = 1; // set outputReset to 1
        output.textContent = 'Error';
      }
    }
  });



