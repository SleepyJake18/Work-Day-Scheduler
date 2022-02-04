var $currentDay = function () {
    document.getElementById('currentDay').innerHTML=moment().format('ddd, MMM Do YYYY, h:mm:ss a');
    
}
setInterval($currentDay, 1000);
