
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),

        eventDay = "8/10/2022";
    
    today = mm + "/" + dd + "/" + yyyy;
    //end
    
    const countDown = new Date(eventDay).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("day").innerText = Math.floor(distance / (day));
            document.getElementById("hour").innerText = Math.floor((distance % (day)) / (hour));
            document.getElementById("minute").innerText = Math.floor((distance % (hour)) / (minute));
            document.getElementById("second").innerText = Math.floor((distance % (minute)) / (second));
  
          //do something later when date is reached
        //   if (distance < 0) {
        //     document.getElementById("headline").innerText = "It's my birthday!";
        //     document.getElementById("countdown").style.display = "none";
        //     document.getElementById("content").style.display = "block";
        //     clearInterval(x);
        //   }
        }, 0);
    }());