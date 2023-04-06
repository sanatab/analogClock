setInterval(()=>{
    date = new Date();
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    
    hr_rotation = 30*hr + min/2;
    min_rotation = 6*min;
    sec_rotation = 6*sec;

  
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minutes.style.transform = `rotate(${min_rotation}deg)`;
    seconds.style.transform = `rotate(${sec_rotation}deg)`;

},1000)


 const Time = new Time();
console.log(Time);