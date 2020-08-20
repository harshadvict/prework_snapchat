let white_Queen = {
    j: 0,
    direction: "South",
    X_coordinate: 4,
    Y_coordinate: 0,
    position: function () { console.log("(" + this.X_coordinate + "," + this.Y_coordinate + ")") },
    move_forward: function () {
        if (this.direction == "South") {
            this.X_coordinate = this.X_coordinate;
            this.Y_coordinate = this.Y_coordinate + 1;
            if (white_Queen.X_coordinate == black_Queen.X_coordinate && white_Queen.Y_coordinate == black_Queen.Y_coordinate)
                this.updatePosition();
        }
        else if (this.direction == "East") {
            this.X_coordinate = this.X_coordinate + 1;
            this.Y_coordinate = this.Y_coordinate;
            if (white_Queen.X_coordinate == black_Queen.X_coordinate && white_Queen.Y_coordinate == black_Queen.Y_coordinate)
                this.updatePosition();
        }
        else if (this.direction == "West") {
            this.X_coordinate = this.X_coordinate - 1;
            this.Y_coordinate = this.Y_coordinate;
            if (white_Queen.X_coordinate == black_Queen.X_coordinate && white_Queen.Y_coordinate == black_Queen.Y_coordinate)
                this.updatePosition();
        }
        else if (this.direction == "North") {
            this.X_coordinate = this.X_coordinate;
            this.Y_coordinate = this.X_coordinate - 1;
            if (white_Queen.X_coordinate == black_Queen.X_coordinate && white_Queen.Y_coordinate == black_Queen.Y_coordinate)
                this.updatePosition();
        }
        else if (this.direction == "North - East") {
            this.X_coordinate = this.X_coordinate + 1;
            this.Y_coordinate = this.Y_coordinate - 1;
            if (white_Queen.X_coordinate == black_Queen.X_coordinate && white_Queen.Y_coordinate == black_Queen.Y_coordinate)
                this.updatePosition();
        }
        else if (this.direction == "North - West") {
            this.X_coordinate = this.X_coordinate - 1;
            this.Y_coordinate = this.X_coordinate - 1;
            if (white_Queen.X_coordinate == black_Queen.X_coordinate && white_Queen.Y_coordinate == black_Queen.Y_coordinate)
                this.updatePosition();
        }
        else if (this.direction == "South - East") {
            this.X_coordinate = this.X_coordinate + 1;
            this.Y_coordinate = this.Y_coordinate + 1;
            if (white_Queen.X_coordinate == black_Queen.X_coordinate && white_Queen.Y_coordinate == black_Queen.Y_coordinate)
                this.updatePosition();
        }
        else {
            this.X_coordinate = this.X_coordinate - 1;
            this.Y_coordinate = this.Y_coordinate + 1;
            if (white_Queen.X_coordinate == black_Queen.X_coordinate && white_Queen.Y_coordinate == black_Queen.Y_coordinate)
                this.updatePosition();
        }

    },
    changeDirection: function (new_direction) {
        switch (new_direction) {
            case "N":
                this.direction = "North";
                break;
            case "S":
                this.direction = "South";
                break;
            case "E":
                this.direction = "East";
                break;
            case "W":
                this.direction = "West";
                break;
            case "NE":
                this.direction = "North - East";
                break;
            case "NW":
                this.direction = "North - West";
                break;
            case "SE":
                this.direction = "South - East";
                break;
            case "SW":
                this.direction = "South - West";
                break;
            default:
                this.direction = "South";
        }
    },
    jumpMoveforward: function (moves) {
        if ((Number(this.X_coordinate) + Number(moves) >= 8 || Number(this.Y_coordinate) + Number(moves)) >= 8) {
            console.log("warning:-invalid move queen will cross the board");
        }
        else {
            var i;
            for (i = 0; i < moves; i++) {
                white_Queen.move_forward();
            }
        }
    },
    whereabouts: [],
    updatePosition: function () {
        this.whereabouts[this.j] = "(" + this.X_coordinate + "," + this.Y_coordinate + ")";
        this.j++;
    },
}

let black_Queen = {
    j: 0,
    direction: "North",
    X_coordinate: 4,
    Y_coordinate: 7,
    position: function () { console.log("(" + this.X_coordinate + "," + this.Y_coordinate + ")") },
    move_forward: function () {
        if (this.direction == "South") {
            this.X_coordinate = this.X_coordinate;
            this.Y_coordinate = this.Y_coordinate + 1;
            if (white_Queen.X_coordinate == black_Queen.X_coordinate && white_Queen.Y_coordinate == black_Queen.Y_coordinate)
                this.updatePosition();
        }
        else if (this.direction == "East") {
            this.X_coordinate = this.X_coordinate + 1;
            this.Y_coordinate = this.Y_coordinate;
            if (white_Queen.X_coordinate == black_Queen.X_coordinate && white_Queen.Y_coordinate == black_Queen.Y_coordinate)
                this.updatePosition();
        }
        else if (this.direction == "West") {
            this.X_coordinate = this.X_coordinate - 1;
            this.Y_coordinate = this.Y_coordinate;
            if (white_Queen.X_coordinate == black_Queen.X_coordinate && white_Queen.Y_coordinate == black_Queen.Y_coordinate)
                this.updatePosition();
        }
        else if (this.direction == "North") {
            this.X_coordinate = this.X_coordinate;
            this.Y_coordinate = this.X_coordinate - 1;
            if (white_Queen.X_coordinate == black_Queen.X_coordinate && white_Queen.Y_coordinate == black_Queen.Y_coordinate)
                this.updatePosition();
        }
        else if (this.direction == "North - East") {
            this.X_coordinate = this.X_coordinate + 1;
            this.Y_coordinate = this.Y_coordinate - 1;
            if (white_Queen.X_coordinate == black_Queen.X_coordinate && white_Queen.Y_coordinate == black_Queen.Y_coordinate)
                this.updatePosition();
        }
        else if (this.direction == "North - West") {
            this.X_coordinate = this.X_coordinate - 1;
            this.Y_coordinate = this.X_coordinate - 1;
            if (white_Queen.X_coordinate == black_Queen.X_coordinate && white_Queen.Y_coordinate == black_Queen.Y_coordinate)
                this.updatePosition();
        }
        else if (this.direction == "South - East") {
            this.X_coordinate = this.X_coordinate + 1;
            this.Y_coordinate = this.Y_coordinate + 1;
            if (white_Queen.X_coordinate == black_Queen.X_coordinate && white_Queen.Y_coordinate == black_Queen.Y_coordinate)
                this.updatePosition();
        }
        else {
            this.X_coordinate = this.X_coordinate - 1;
            this.Y_coordinate = this.Y_coordinate + 1;
            if (white_Queen.X_coordinate == black_Queen.X_coordinate && white_Queen.Y_coordinate == black_Queen.Y_coordinate)
                this.updatePosition();
        }

    },
    changeDirection: function (new_direction) {
        switch (new_direction) {
            case "N":
                this.direction = "North";
                break;
            case "S":
                this.direction = "South";
                break;
            case "E":
                this.direction = "East";
                break;
            case "W":
                this.direction = "West";
                break;
            case "NE":
                this.direction = "North - East";
                break;
            case "NW":
                this.direction = "North - West";
                break;
            case "SE":
                this.direction = "South - East";
                break;
            case "SW":
                this.direction = "South - West";
                break;
            default:
                this.direction = "North";
        }
    },
    jumpMoveforward: function (moves) {
        if (Number(this.X_coordinate) + Number(moves) >= 8 || Number(this.Y_coordinate) + Number(moves) >= 8) {
            console.log("warning:-invalid move queen will cross the board");
        }
        else {
            var i;
            for (i = 0; i < moves; i++) {
                black_Queen.move_forward();
            }
        }
    },
    whereabouts: [],
    updatePosition: function () {
        this.whereabouts[this.j] = "(" + this.X_coordinate + "," + this.Y_coordinate + ")";
        this.j++;
    },
}

console.log("chess with queen");
var k = 1;
while (k == 1) {
    var choice = prompt("enter white or black OR EXIT", "");

    if (choice == "black") {
        console.log("choose option for movement");
        var value = prompt("1." + "move forward" + "\n" + "2." + "change-direction" + "\n" + "3." + "position log" + "\n" + "4." + "direction" + "\n" + "5." + "position");
        switch (value) {
            case "1":
                var steps = prompt("please enter the no of steps");
                black_Queen.jumpMoveforward(steps);
                break;
            case "2":
                var direction = prompt("please enter the new direction");
                black_Queen.changeDirection(direction);
                break;
            case "3":
                console.log(black_Queen.whereabouts);
                break;
            case "4":
                console.log(black_Queen.direction);
                break;
            case "5":
                console.log(black_Queen.position());
                break;
            default:
                break;
        }
    }
    else if (choice == "white") {
        console.log("choose option for movement");
        var value = prompt("1." + "move forward" + "\n" + "2." + "change-direction" + "\n" + "3." + "position log" + "\n" + "4." + "direction" + "\n" + "5." + "position");
        console.log("value");
        switch (value) {
            case "1":
                var steps = prompt("please enter the no of steps");
                white_Queen.jumpMoveforward(steps);
                break;
            case "2":
                var direction = prompt("please enter the new direction");
                white_Queen.changeDirection(direction);
                break;
            case "3":
                console.log(white_Queen.whereabouts);
                break;
            case "4":
                console.log(white_Queen.direction);
                break;
            case "5":
                console.log(white_Queen.position());
                break;
            default:
                break;
        }
    }
    else {
        k = 0;
    }
}