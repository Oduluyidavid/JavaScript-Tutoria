 function nextTrafficLight(color,){
    // explaining the trafic light color and their respective duration
    const trafficLights ={
        "green": {next: "yellow", duration: 60},
        "yellow": {next: "red", duration: 5},
        "red": {next: "green", duration: 55},
    };
    //  check if the input is a string and covert it to lower case for case insensitivity
    if(typeof color != "string" ){
        return "Error: Invalid input!";
    }
    const lowerCaseColor = color.toLowerCase();
    if (lowerCaseColor != "green" && lowerCaseColor != "yellow" && lowerCaseColor !="red" ){
        return "Error: invalid color"
    }
    // check if the color is valid and return the next light and duration
    // if ( trafficLights[lowerCaseColor]){
        const nextLight = trafficLights[lowerCaseColor];
        return `Current:${lowerCaseColor} Next ${nextLight.next},Duration: ${nextLight.duration} seconds`
    // }else {
        //  return "Invalid color"
    //  }  
  }

 const trafficOne= nextTrafficLight("Green");
 console.log(trafficOne )
 const trafficTwo= nextTrafficLight("Yellow");
 console.log(trafficTwo );
 const trafficThree = nextTrafficLight("Red");
 console.log(trafficThree);
 const trafficFour = nextTrafficLight("Blue")
 console.log(trafficFour);
 

