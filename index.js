var express = require("express"); //to import the express library
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var app = express();

app.get("/test", function (req, res) {
    var visualRecognition = new VisualRecognitionV3({
        version: '2018-03-19',
        iam_apikey: 'ZPcjgHdJMSokQ2f9_SHGtyaqYd5sdmLB6CAU8kRmMPd3'
    });

    var params = {
        url: "https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-x/silver/Apple-iPhoneX-Silver-1-3x.jpg"
    };

    visualRecognition.classify(params, function (err, response) {
        if (err)
            console.log(err);
        else {
            //sote the response into a string
            var result = JSON.stringify(response, null, 2)
            res.end(result)
            console.log(JSON.stringify(response, null, 2))
        }
    });

})


var listener = app.listen(process.env.PORT,process.env.IP,function(){
//var listener = app.listen(4000, process.env.IP, function () {
    //var listener = app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
    console.log('Listening on port ' + listener.address().port);
});