var beer_count = 99;

function beer_song(){
while(beer_count >= 0){
    if(beer_count >= 2){
        console.log((beer_count) + " bottles of beer on the wall, " + (beer_count) + " bottles of beer.Take one down and pass it around, " + (beer_count) + " bottles of beer on the wall.");
        beer_count--;
    }
    else if(beer_count === 1){
        console.log((beer_count) + " bottle of beer on the wall, " + (beer_count) + " bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.");
        beer_count--;
    }
    else if (beer_count === 0){
        console.log("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.");
        beer_count--;
    }
}
}