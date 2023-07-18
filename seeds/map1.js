const map1 = []

map1.push([
    { // (1, 1)
        "north": true,
        "east": true,
        "south": false,
        "west": false
    },
    { // (2, 1)
        "north": true,
        "east": true,
        "south": false,
        "west": true
    },
    { // (3, 1)
        "north": true,
        "east": false,
        "south": false,
        "west": true
    },
    ]);

map1.push([
    { // (1, 2)
        "north": true,
        "east": true,
        "south": true,
        "west": false
    },
    { // (2, 2)
        "north": true,
        "east": true,
        "south": true,
        "west": true
    },
    { // (3, 2)
        "north": true,
        "east": false,
        "south": true,
        "west": true
    },
]);

map1.push([
    { // (1, 3)
        "north": false,
        "east": true,
        "south": true,
        "west": false
    },
    { // (2, 3)
        "north": false,
        "east": true,
        "south": true,
        "west": true
    },
    { // (3, 3)
        "north": false,
        "east": false,
        "south": true,
        "west": true
    },
]);

module.exports = map1;