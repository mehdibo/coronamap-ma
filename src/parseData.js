const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");

request("http://www.covidmaroc.ma/Pages/AccueilAR.aspx", function(
  error,
  response,
  html
) {
  if (!error) {
    var $ = cheerio.load(html);

    var confirmed, deaths, recovered, notConfirmed, date;
    var json = require("./databackup.json");

    json.locations.some(function(elem) {
      elem.name = elem.name.replace(/[\u200B-\u200D\uFEFF]/g, "");
    });

    $("#MSOZoneCell_WebPartWPQ1")
      .find("p")
      .each(function(index, el) {
        var vel = $(el).html();
        if (index == 3 || index == 4) {
          vel = $(el)
            .text()
            .trim()
            .replace(/\s\s/g, "");
          if (index == 3) {
            confirmed = vel;
          } else {
            notConfirmed = vel;
          }
        } else if (index == 0) {
          date = $(el)
            .text()
            .replace(/^\s+/g, "");
        } else if (index == 1) {
          $(el)
            .find("span")
            .each(function(i, e) {
              if (i == 0) {
                recovered = $(e)
                  .text()
                  .trim()
                  .replace(/[\u200B-\u200D\uFEFF]/g, "");
              } else if (i == 1) {
                deaths = $(e)
                  .text()
                  .trim()
                  .replace(/[\u200B-\u200D\uFEFF]/g, "");
              }
            });
        }
      });

    $(".ms-rteTable-6")
      .find("tr")
      .each(function(index, el) {
        if (index > 0 && index <= 12) {
          var ee = $(el)
            .text()
            .replace(/\s\s+/g, "")
            .replace(/[\u200B-\u200D\uFEFF]/g, "");
          json.locations.some(function(elem) {
            if (ee.replace(/[0-9.]/g, "").toString() == elem.name) {
              elem.count = parseInt(ee.replace(/[^0-9.]/g, ""));
              console.log(
                index,
                "'" + elem.name + "'",
                "New Value : " + elem.count
              );
              return true;
            }
          });
        }
      });
    json.deaths = parseInt(deaths);
    json.recovered = parseInt(recovered);
    json.confirmed = parseInt(confirmed);
    json.notConfirmed = parseInt(notConfirmed);
    json.lastUpdate = new Date()
      .toISOString()
      .replace("T", " ")
      .substring(0, 16);
    console.log("\nTotal deaths:" + json.deaths);
    console.log("Total recovered:" + json.recovered);
    console.log("Total confirmed:" + json.confirmed);
  }

  fs.writeFile("./data.json", JSON.stringify(json, null, 4), function(err) {
    console.log(
      "\nFile successfully written! - Check your project directory for the data.json file"
    );
  });
});
