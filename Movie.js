var request = require('request');
var cheerio = require('cheerio');

var url = 'http://www.imdb.com/chart/';
request(url, function(error,response,html){
  if(!error && response.statusCode ==200)
  {
var strContent = "";
    var $ =cheerio.load(html);
    $('th:contains(Gross)').parents('table').find('tr').each(function(index,element){
      if(index>0)
      {
        var tds = $(element).find('td');
         strContent += $(tds.eq(1)).find('a').text().trim() + "," + tds.eq(2).text().trim() + "," +tds.eq(3).text().trim() +'\r\n';

      }

    });
    console.log(strContent);
  }else {
    console.log("Error occured !!");
  }
});
