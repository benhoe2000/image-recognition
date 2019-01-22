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
            var result = JSON.stringify(response, null, 2);
            //res.write(response.images.constructor.name + "\n");
            //res.write(response.images[0].classifiers.constructor.name +"\n");
            //res.end(response.images[0].classifiers[0].classes.constructor.name + "\n");
            //Get the array of classes (category classification)
            var class_col = response.images[0].classifiers[0].classes;
            for (i = 0; i < class_col.length; i++) {
                res.write(class_col[i].class + "\n");
                res.write(class_col[i].score + "\n");
            }
            res.end("END")

            console.log(result);
        }
    });

})

app.get("/test", function (req, res) {
    var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

    var toneAnalyzerV3 = new ToneAnalyzerV3({
        version: '2017-09-21',
        username: XXXXXXXXXXXXXX',
      password: 'XXXXXXXXXXXXXX'
    });

    var text = 'Team, I know that times are tough! Product sales have been disappointing for the past three quarters. We have a competitive product, but we need to do a better job of selling it!'

    var params = {
        'tone_input': { 'text': text },
        'content_type': 'application/json'
    };

    toneAnalyzerV3.tone(params, function (error, response) {
        if (error)
            console.log('error:', error);
        else
            console.log(JSON.stringify(response, null, 2));
    }
    ); 0;

})


//var listener = app.listen(process.env.PORT,process.env.IP,function(){
var listener = app.listen(4000, process.env.IP, function () {
    //var listener = app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
    console.log('Listening on port ' + listener.address().port);
});


//var listener = app.listen(4000, process.env.IP, function () {
var listener = app.listen(process.env.PORT, process.env.IP, function () {
    console.log("server has started");
    console.log('Listening on port ' + listener.address().port)
})


