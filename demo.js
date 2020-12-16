var robot = require("robotjs");
var fs = require("fs");

var screen = robot.getScreenSize();
robot.setMouseDelay(50);
setTimeout(openChrome,2000);

function openChrome(){

    robot.moveMouseSmooth(1330,55);
    setTimeout(function(){
       
        robot.mouseClick();
        robot.moveMouseSmooth(545,604);
        robot.typeStringDelayed("google chrome",1000);
        robot.keyTap("enter");

        setTimeout(openTabs,2000);
    
    },2000)
}

function openTabs()
{
    var rdata = fs.readFileSync("./chrome.json");
    var tab = JSON.parse(rdata);
    console.log("Hello");
    for(var i = 0;i<tab.length;i++)
    {
        robot.typeString(tab[i]);
        robot.keyTap("enter");
        robot.keyToggle("control","down");
        robot.keyTap("t");
        robot.keyToggle("control","up");

    }
}


