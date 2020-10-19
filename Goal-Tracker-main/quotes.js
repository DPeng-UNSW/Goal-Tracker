function showQuote() {
    var Quote = [
    	'"Improve by 0.3% a day and you will be twice the person in a year"',
    	'"Do the thing and you will have the power"',
    	'"Push yourself because no one else is going to do it for you"',
    	'"Someone can fail as many times as they want. They only become a failure once they blame someone else"',
    	'"To succeed is to double your rate of failure"',
    	'"Do or do not there is no try"',
        '"Dave Peng is a SAVAGE"'
    ];
    var random = Math.floor(Math.random() * (Quote.length));
    document.getElementById("Quote").innerHTML = Quote[random];
    localStorage.setItem("quote", Quote[random]);
  }

function showBackground() {
    var Background = [
        'background1.jpg',
        'background2.jpg',
        'background3.jpg',
        'background4.jpg',
        'background5.jpg',
        'background6.jpg',
        'background7.jpg',
        'background8.jpg',
        'background9.jpg',
        'background10.jpg',
        'background11.jpg',
        'background12.jpg',
        'background13.jpg',
        'background14.jpg',
        'background15.jpg',
        'background16.jpg',
        'background17.jpg',
        'background18.jpg'

    ];
    var random = Math.floor(Math.random() * (Background.length));
    document.body.style.backgroundImage = "url(images/" + Background[random] + ")";
    localStorage.setItem("background", "url(images/" + Background[random] + ")");
}

function isNewDay() {
    var date = new Date();
    var d = date.getDate();
    if(localStorage.getItem("date") != d) {
        localStorage.setItem("date", d);
        return 1;
    } else {
        return 0;
    }
}

function hello() {
    if(isNewDay() == 1) {
        showQuote();
        showBackground();
    } else {
        background = localStorage.getItem("background");
        quote = localStorage.getItem("quote");
        document.body.style.backgroundImage = background;
        document.getElementById("Quote").innerHTML = quote;
    }
};

document.onload = hello();
