const fruit = "APPLE"; // this is case sensitive

switch(fruit){
    case "APPLE":
        console.log("I am making apple juice");
        break; // prevents code from running the subsequent console.log statements

    case "ORANGE":
        console.log("I am making orange juice")
        break;

    case "DURIAN":
        console.log("I shall simply eat the durian")
        break;
    
    default:
        console.log("I don't know what to do with this fruit");
        break;
}