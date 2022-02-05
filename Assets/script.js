var $9AM = document.getElementById('9AM')
var $10AM = document.getElementById('10AM')
var $11AM = document.getElementById('11AM')
var $12PM = document.getElementById('12PM')
var $1PM = document.getElementById('1PM')
var $2PM = document.getElementById('2PM')
var $3PM = document.getElementById('3PM')
var $4PM = document.getElementById('4PM')
var $5PM = document.getElementById('5PM')
var Nine = moment({hour: 9}).format('kk:mm:ss');
var Ten = moment({hour: 10}).format('k');
var Eleven = moment({hour: 11}).format('k');
var Noon = moment({hour: 12}).format('k');
var One = moment({hour: 13}).format('k');
var Two = moment({hour: 14}).format('k');
var Three = moment({hour: 15}).format('k');
var Four = moment({hour: 16}).format('k');
var Five = moment({hour: 17}).format('k');
var currentTime = moment().format('k');
var $btn1 = document.getElementById('btn1');
var $btn2 = document.getElementById('btn2');
var $btn3 = document.getElementById('btn3');
var $btn4 = document.getElementById('btn4');
var $btn5 = document.getElementById('btn5');
var $btn6 = document.getElementById('btn6');
var $btn7 = document.getElementById('btn7');
var $btn8 = document.getElementById('btn8');
var $btn9 = document.getElementById('btn9');
var inputValue1 = $9AM.textContent;
var inputValue2 = $10AM.textContent;
var inputValue3 = $11AM.textContent;
var inputValue4 = $12PM.textContent;
var inputValue5 = $1PM.textContent;
var inputValue6 = $2PM.textContent;
var inputValue7 = $3PM.textContent;
var inputValue8 = $4PM.textContent;
var inputValue9 = $5PM.textContent;

var $currentDay = function () {
    document.getElementById('currentDay').innerHTML=moment().format('ddd, MMM Do YYYY, h:mm:ss a');
    
};
//runs function once per second
setInterval($currentDay, 1000);
//function that compares time set to input element with current local time
var timeComparison1 = function () {
    //says that if set time is in the past, execute, else continue
    if (Nine < currentTime) {
        //sets background color of input element targeted by $9AM to red
        $9AM.classList.add("bg-danger");
        //says that if time set to input element is equal to current local time, execute, else continue
    } else if (Nine === currentTime) {
        //sets background color of input element targeted by $9AM to grey
        $9AM.classList.add('bg-secondary');
        //says if set time is greater than current local time, execute, else do nothing
    } else if (Nine > currentTime) {
        //sets background color of input element targeted by $9AM to green
        $9AM.classList.add('bg-success');
    }
    //runs function once per second
}; setInterval(timeComparison1, 1000);
//function that compares time set to input element with current local time
var timeComparison2 = function () {
    //says that if set time is in the past, execute, else continue
    if (Ten < currentTime) {
        //sets background color of input element targeted by $10AM to red
        $10AM.classList.add("bg-danger");
        //says that if time set to input element is equal to current local time, execute, else continue
    } else if (Ten === currentTime) {
        //sets background color of input element targeted by $10AM to grey
        $10AM.classList.add('bg-secondary');
        //says if set time is greater than current local time, execute, else do nothing
    } else if (Ten > currentTime) {
        //sets background color of input element targeted by $10AM to green
        $10AM.classList.add('bg-success');
    }
    //runs function once per second
}; setInterval(timeComparison2, 1000);
//function that compares time set to input element with current local time
var timeComparison3 = function () {
    //says that if set time is in the past, execute, else continue
    if (Eleven < currentTime) {
        //sets background color of input element targeted by $11AM to red
        $11AM.classList.add("bg-danger");
        //says that if time set to input element is equal to current local time, execute, else continue
    } else if (Eleven === currentTime) {
        //sets background color of input element targeted by $11AM to grey
        $11AM.classList.add('bg-secondary');
        //says if set time is greater than current local time, execute, else do nothing
    } else if (Eleven > currentTime) //sets background color of input element targeted by $11AM to green
        $11AM.classList.add('bg-success');
    }; setInterval(timeComparison3, 1000);
//function that compares time set to input element with current local time
var timeComparison4 = function () {
    //says that if set time is in the past, execute, else continue
    if (Noon < currentTime) {
        //sets background color of input element targeted by $12PM to red
        $12PM.classList.add("bg-danger");
        //says that if time set to input element is equal to current local time, execute, else continue
    } else if (Noon === currentTime) {
        //sets background color of input element targeted by $12PM to grey
        $12PM.classList.add('bg-secondary');
        //says if set time is greater than current local time, execute, else do nothing
    } else if (Noon > currentTime) {
        //sets background color of input element targeted by $12PM to green
        $12PM.classList.add('bg-success');
    }
    //runs function once per second
}; setInterval(timeComparison4, 1000);
//function that compares time set to input element with current local time
var timeComparison5 = function () {
    //says that if set time is in the past, execute, else continue
    if (One < currentTime) {
        //sets background color of input element targeted by $1PM to red
        $1PM.classList.add("bg-danger");
        //says that if time set to input element is equal to current local time, execute, else continue
    } else if (One === currentTime) {
        //sets background color of input element targeted by $1PM to grey
        $1PM.classList.add('bg-secondary');
        //says if set time is greater than current local time, execute, else do nothing
    } else if (One > currentTime) {
        //sets background color of input element targeted by $1PM to green
        $1PM.classList.add('bg-success');
    }
    //runs function once per second
}; setInterval(timeComparison5, 1000);
//function that compares time set to input element with current local time
var timeComparison6 = function () {
    //says that if set time is in the past, execute, else continue
    if (Two < currentTime) {
        //sets background color of input element targeted by $2PM to red
        $2PM.classList.add("bg-danger");
        //says that if time set to input element is equal to current local time, execute, else continue
    } else if (Two === currentTime) {
        //sets background color of input element targeted by $2PM to grey
        $2PM.classList.add('bg-secondary');
        //says if set time is greater than current local time, execute, else do nothing
    } else if (Two > currentTime) {
        //sets background color of input element targeted by $2PM to green
        $2PM.classList.add('bg-success');
    }
    //runs function once per second
}; setInterval(timeComparison6, 1000);
//function that compares time set to input element with current local time
var timeComparison7 = function () {
    //says that if set time is in the past, execute, else continue
    if (Three < currentTime) {
        //sets background color of input element targeted by $3PM to red
        $3PM.classList.add("bg-danger");
        //says that if time set to input element is equal to current local time, execute, else continue
    } else if (Three === currentTime) {
        //sets background color of input element targeted by $3PM to grey
        $3PM.classList.add('bg-secondary');
        //says if set time is greater than current local time, execute, else do nothing
    } else if (Three > currentTime) {
        //sets background color of input element targeted by $3PM to green
        $3PM.classList.add('bg-success');
    }
    //runs function once per second
}; setInterval(timeComparison7, 1000);
//function that compares time set to input element with current local time
var timeComparison8 = function () {
    //says that if set time is in the past, execute, else continue
    if (Four < currentTime) {
        //sets background color of input element targeted by $4PM to red
        $4PM.classList.add("bg-danger");
        //says that if time set to input element is equal to current local time, execute, else continue
    } else if (Four === currentTime) {
        //sets background color of input element targeted by $4PM to grey
        $4PM.classList.add('bg-secondary');
        //says if set time is greater than current local time, execute, else do nothing
    } else if (Four > currentTime) {
        //sets background color of input element targeted by $4PM to green
        $4PM.classList.add('bg-success');
    }
}; setInterval(timeComparison8, 1000);
//function that compares time set to input element with current local time
var timeComparison9 = function () {
    //says that if set time is in the past, execute, else continue
    if (Five < currentTime) {
        //sets background color of input element targeted by $5PM to red
        $5PM.classList.add("bg-danger");
        //says that if time set to input element is equal to current local time, execute, else continue
    } else if (Five === currentTime) {
        //sets background color of input element targeted by $5PM to grey
        $5PM.classList.add('bg-secondary');
        //says if set time is greater than current local time, execute, else do nothing
    } else if (Five > currentTime) {
        //sets background color of input element targeted by $5PM to green
        $5PM.classList.add('bg-success');
    }
    //runs function once per second
}; setInterval(timeComparison9, 1000);

//function that renders local storage item to input field displayed text
function lastEntered9AM () {
    //sets variable equal to local storage item
    var outputValue = localStorage.getItem('inVal1');
    //sets text displayed in input element equal to local storage item
    $9AM.value = outputValue;
}
//function that renders local storage item to input field displayed text
function lastEntered10AM () {
    //sets variable equal to local storage item
    var outputValue = localStorage.getItem('inVal2');
    //sets text displayed in input element equal to local storage item
    $10AM.value = outputValue;
}
//function that renders local storage item to input field displayed text
function lastEntered11AM () {
    //sets variable equal to local storage item
    var outputValue = localStorage.getItem('inVal3');
    //sets text displayed in input element equal to local storage item
    $11AM.value = outputValue;
}
//function that renders local storage item to input field displayed text
function lastEntered12PM () {
    //sets variable equal to local storage item
    var outputValue = localStorage.getItem('inVal4');
    //sets text displayed in input element equal to local storage item
    $12PM.value = outputValue;
}
//function that renders local storage item to input field displayed text
function lastEntered1PM () {
    //sets variable equal to local storage item
    var outputValue = localStorage.getItem('inVal5');
    //sets text displayed in input element equal to local storage item
    $1PM.value = outputValue;
}
//function that renders local storage item to input field displayed text
function lastEntered2PM () {
    //sets variable equal to local storage item
    var outputValue = localStorage.getItem('inVal6');
    //sets text displayed in input element equal to local storage item
    $2PM.value = outputValue;
}
//function that renders local storage item to input field displayed text
function lastEntered3PM () {
    //sets variable equal to local storage item
    var outputValue = localStorage.getItem('inVal7');
    //sets text displayed in input element equal to local storage item
    $3PM.value = outputValue;
}
//function that renders local storage item to input field displayed text
function lastEntered4PM () {
    //sets variable equal to local storage item
    var outputValue = localStorage.getItem('inVal8');
    //sets text displayed in input element equal to local storage item
    $4PM.value = outputValue;
}
//function that renders local storage item to input field displayed text 
function lastEntered5PM () {
    //sets variable equal to local storage item
    var outputValue = localStorage.getItem('inVal9');
    //sets text displayed in input element equal to local storage item
    $5PM.value = outputValue;
}

lastEntered9AM();
lastEntered10AM();
lastEntered11AM();
lastEntered12PM();
lastEntered1PM();
lastEntered2PM();
lastEntered3PM();
lastEntered4PM();
lastEntered5PM();

//Listens for click on 1st button on page, then executes function
$btn1.addEventListener('click', function(event){
    //Prevents default behavior
    event.preventDefault();
     //sets variable element equal to target of click
    var element = event.target;
    //makes sure target of click is a button element
    if (element.matches('button')){   
        //sets variable equal to value (text typed in) of input element
        var inputValue = $9AM.value;

        localStorage.setItem('inVal1', inputValue);

    }
});
//Listens for click on 2nd button on page, then executes function
$btn2.addEventListener('click', function(event){
    //Prevents default behavior
    event.preventDefault();
    //sets variable element equal to target of click
    var element = event.target;
//makes sure target of click is a button element
    if (element.matches('button')){   
        var inputValue = $10AM.value;
        //sets local storage item equal to value of above variable
        localStorage.setItem('inVal2', inputValue);

    }
});
//Listens for click on 3rd button on page, then executes function
$btn3.addEventListener('click', function(event){
    //Prevents default behavior
    event.preventDefault();
    //sets variable element equal to target of click
    var element = event.target;
    //makes sure target of click is a button element
    if (element.matches('button')){   
        var inputValue = $11AM.value;
        //sets local storage item equal to value of above variable
        localStorage.setItem('inVal3', inputValue);

    }
});
//Listens for click on 4th button on page, then executes function
$btn4.addEventListener('click', function(event){
    //Prevents default behavior
    event.preventDefault();
    //sets variable element equal to target of click
    var element = event.target;
    //makes sure target of click is a button element
    if (element.matches('button')){ 
        //sets variable equal to value (text typed in) of input element  
        var inputValue = $12PM.value;
        //sets local storage item equal to value of above variable
        localStorage.setItem('inVal4', inputValue);

    }
});
//Listens for click on 5th button on page, then executes function
$btn5.addEventListener('click', function(event){
    //Prevents default behavior
    event.preventDefault();
    //sets variable element equal to target of click
    var element = event.target;
    //makes sure target of click is a button element
    if (element.matches('button')){  
        //sets variable equal to value (text typed in) of input element 
        var inputValue = $1PM.value;
        //sets local storage item equal to value of above variable
        localStorage.setItem('inVal5', inputValue);

    }
});
//Listens for click on 6th button on page, then executes function
$btn6.addEventListener('click', function(event){
    //Prevents default behavior
    event.preventDefault();
    //sets variable element equal to target of click
    var element = event.target;
    //makes sure target of click is a button element
    if (element.matches('button')){  
        //sets variable equal to value (text typed in) of input element 
        var inputValue = $2PM.value;
        //sets local storage item equal to value of above variable
        localStorage.setItem('inVal6', inputValue);

    }
});
//Listens for click on 7th button on page, then executes function
$btn7.addEventListener('click', function(event){
    //Prevents default behavior
    event.preventDefault();
    //sets variable element equal to target of click
    var element = event.target;
    //makes sure target of click is a button element
    if (element.matches('button')){   
        //sets variable equal to value (text typed in) of input element
        var inputValue = $3PM.value;
        //sets local storage item equal to value of above variable
        localStorage.setItem('inVal7', inputValue);

    }
});
//Listens for click on 8th button on page, then executes function
$btn8.addEventListener('click', function(event){
    //Prevents default behavior
    event.preventDefault();
    //sets variable element equal to target of click
    var element = event.target;
    //makes sure target of click is a button element
    if (element.matches('button')){   
        //sets variable equal to value (text typed in) of input element
        var inputValue = $4PM.value;
         //sets local storage item equal to value of above variable
        localStorage.setItem('inVal8', inputValue);

    }
});
//Listens for click on 9th button on page, then executes function
$btn9.addEventListener('click', function(event){
    //Prevents default behavior
    event.preventDefault();
    //sets variable element equal to target of click
    var element = event.target;
    //makes sure target of click is a button element
    if (element.matches('button')){   
        //sets variable equal to value (text typed in) of input element
        var inputValue = $5PM.value;
        //sets local storage item equal to value of above variable
        localStorage.setItem('inVal9', inputValue);

    }
});
