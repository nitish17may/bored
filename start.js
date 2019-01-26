// this is the test of the project to see if it can work on the rapsberry pi independently of the arduino mc
// the project might require the use of a gpio expansion to get it to work
// the benefit of using raspberry pi is the provision to handle a lot of data


// A basic outline of what this particular code should do 


//requirement libraries
var rpio = require('rpio'); //this one is for the gpio

//lets do a very basic blinking led test on the raspberry pi 

rpio.open(4, rpio.OUTPUT, rpio.LOW);    //this should connect the pin 4 and set it low

while(1){
    rpio.write(4, rpio.HIGH);
    rpio.sleep(1);

    rpio.write(4, rpio.LOW);
    rpio.sleep(1);
}

