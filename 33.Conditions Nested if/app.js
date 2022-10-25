let score = prompt("What is your score");
if (score >  80){
    document.write("Grad A");
if(score > 90){
    document.write("Reward $100");
}
else if(score > 85){
    document.write("Reward $50");
}
else{
    document.write("Reward $20");
}
}
else{
    document.write("Failed");
}