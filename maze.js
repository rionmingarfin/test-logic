function createMaze(S) {
    var direction = "left"
    for (let i = 1; i <= S; i++) {
        let line = ""
        if ((i % 2) == 1) {
            if (direction == "left") {
                for (let j = 1; j <= S; j++) {
                    if (j == 2) {
                        line += " "
                    } else {
                        line += "@"
                    }
                }
                console.log(line)
            }
            if (direction == "right") {
                for (let j = 1; j <= S; j++) {
                    if (j == (S - 1)) {
                        line += " "
                    } else {
                        line += "@"
                    }
                }
                console.log(line)
            }

            if (direction == "left") {
                direction = "right"
            } else if (direction == "right") {
                direction = "left"
            }
        } else {
            for (let j = 1; j <= S; j++) {
                if (j == 1) {
                    line += "@"
                } else if(j == S) {
                    line += "@"
                } else {
                    line += " "
                }
            }
            console.log(line)
        }
    }
}
createMaze(15)