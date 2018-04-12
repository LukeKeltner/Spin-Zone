const https = require("https");

//API from News API :)
const apiKey = "21f06407cae540c3bc007edfaca38ecb";

var url = 'https://newsapi.org/v2/everything?' +
          'sources=abc-news&' +
          'apiKey='+apiKey;

https.get(url, res =>
{
	res.setEncoding("utf8");
  	let body = "";

  	res.on("data", data => 
  	{
    	body += data;
  	});

	res.on("end", () => 
	{
    	body = JSON.parse(body);
    	for (let i=0; i<body.articles.length; i++)
    	{
    		console.log(body.articles[i].title)
    		console.log(body.articles[i].publishedAt)
    	};
	});
})