function generatePairs() { //make start point (0,0) and end point (5,3)
    var pairs = [
        [0, 0],
        [5, 3] 
    ];

    for (var i = 0; i < 3; i++) {
        var uniquePair = generateUniquePair(pairs);
        pairs.push(uniquePair);
    }

    var temp = pairs[1];
    pairs[1] = pairs[4];
    pairs[4] = temp;

    return pairs;
}

function generateUniquePair(existingPairs) { // generate pair that never exist before
    var a, b;
    var isUnique = false;

    while (!isUnique) {

        if (existingPairs.length === 2) {
            a = Math.floor(Math.random() * 4) + 1;
        }
        if (existingPairs.length === 3) {
            a = Math.floor(Math.random() * 3) + 2;
        }
        if (existingPairs.length === 4) {
            a = Math.floor(Math.random() * 3) + 1;
        }
        b = Math.floor(Math.random() * 4);

        var isPairUnique = true;
        for (var j = 0; j < existingPairs.length; j++) {
            if (existingPairs[j][0] === a && existingPairs[j][1] === b) {
                isPairUnique = false;
                break;
            }
        }

        if (isPairUnique) {
            isUnique = true;
        }
    }

    return [a, b];
}

function createCircles(pairs) { // make circle at the location base on pair
    var rectangle = document.getElementById('rectangle');
    rectangle.innerHTML = '';

    var grid = document.createElement('div');
    grid.className = 'grid';

    for (var i = 0; i < 5; i++) {
        var pair = pairs[i];
        var a = pair[0];
        var b = pair[1];

        var circle = document.createElement('div');
        circle.className = 'circle';

        var text = document.createTextNode(i + 1);
        circle.appendChild(text);

        var gridX = a;
        var gridY = b;

        circle.style.gridColumn = gridX + 1;
        circle.style.gridRow = gridY + 1;

        if (i === 0 || i === 4) {
            circle.style.backgroundColor = 'black';
        } else {
            circle.style.backgroundColor = 'red';
        }
        grid.appendChild(circle);
    }

    rectangle.appendChild(grid);
}

function buttonclick() {
    var pairs = generatePairs();
    createCircles(pairs);
}
