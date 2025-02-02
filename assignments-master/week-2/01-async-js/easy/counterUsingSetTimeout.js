let count = 0;

function incrementCounter(){
    console.log(count);
    count++;
    setTimeout(incrementCounter,1000);
}
incrementCounter();