/**
 * Created by reiven on 2017/09/25.
 */
function readTestText(callback){
    /**
     * readTextText();
     *
     * return test log data from ./test_data/log.txt
     *
     * @type {string}
     * @return string
     */
    var fs = require('fs');
    fs.readFile("./test_data/log.txt", 'utf-8', function(err, text){
        var result = "";
        if(!err){
            result = text;
        }
        callback(result);
    });
}


function parseLogTest(callback){
    /**
     * parseLogTest()
     *
     * this function is load test data from /test_data/log.txt
     * and parse it.
     *
     * But parseLog() is read text from client browser.
     *
     */
    readTestText(function(text){
        var serverLogRawText = text;
        var result = [];
        var i;
        var serverLogList = serverLogRawText.split("\n");
        var length = serverLogList.length;
        var regex = /([0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3})\s-\s-\s\[(.*)\]\s\"(.*)\"\s([0-9]{1,3})\s([0-9]+)\s\"(.+)\"\s\"(.+)\"\s\"(.+)\"/;

        for(i = 0; i < length; i++){
            var lineItem = serverLogList[i].match(regex);
            if(lineItem){
                var appendObject = {
                    "IP": lineItem[1],// TODO: if IP is not given like "" or "-", then data never match now...
                    "Time": lineItem[2],//TODO: need to wrap datetime? reference url: https://github.com/knowledgecode/date-and-time or https://momentjs.com/docs/
                    "HTTP": lineItem[3],
                    "Status": lineItem[4],
                    "Size": parseInt(lineItem[5]),
                    "Referer": lineItem[6],
                    "UA": lineItem[7]
                };
                moment.
                // console.log("obj", appendObject);
                result.push(appendObject);
            }
        }
        callback(result);
    });
}

function parseLog(text, callback){
    // console.log("hello from the function side.\n\n",text);
    var moment = require("moment");
    var serverLogRawText = text;
    var result = [];
    var i;
    var serverLogList = serverLogRawText.split("\n");
    var length = serverLogList.length;
    var regex = /([0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3})\s-\s-\s\[(.*)\]\s\"(.*)\"\s([0123456789]{1,3})\s([0123456789-]+)\s\"(.+)\"\s\"(.+)\"\s\"(.+)\"/;

    for(i = 0; i < length; i++){
        var lineItem = serverLogList[i].match(regex);
        if(lineItem){
            var appendObject = {
                "IP": lineItem[1],// TODO: if IP is not given like "" or "-", then data never match now...
                "Time": moment(lineItem[2], "DD/MMM/YYYY:HH:mm:ss Z"),//URL: http://momentjs.com/docs/
                "HTTP": lineItem[3],
                "Status": lineItem[4],
                "Size": parseInt(lineItem[5]),
                "Referer": lineItem[6],
                "UA": lineItem[7]
            };
            // if(appendObject["Status"].indexOf( "40") != -1 || appendObject["Status"].indexOf("30") != -1){
            //     console.log("obj2", appendObject);
            // }

            result.push(appendObject);
        }
    }
    callback(result);
}


exports.readTestText = readTestText;
exports.parseServerLog = parseLog;