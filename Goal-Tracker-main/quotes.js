function showQuote()
  {
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
  }

  document.onload = showQuote();
