// Nested arrays

//LOOPING

const game = {
    "suspects" : [
        {
        name: "rust",
        color: "orrange",
    }, {
        name: "Scarlat",
        color: "red",
    }
]

}

var [color, color2] = [suspects[0].color, suspects[1].color];

car [{ color: firstColor}, {color: secondColor}] = suspects

var gameLoop = function () {
    for (var i = 0; i < game.suspects.length; i++) {
        console.log('outer loop')
        for (var key in game.suspects[i]) {
            console.log('inner loop')
            if (game.suspects[i][key] === "rusty") {
                console.log('Found \'em!')
            } else {
                console.log('next time!');
            }
        }
    }
}



function foo() {
            //set i to 0 while lengle of game array is greater than i, incrementally raise i by one.
    for (let i = 0; i < game.suspects.length; i++) {
        console.log(game.suspects[i]);
    }
}

for (let key in obj) {
    obj[key]
}

// forEach

