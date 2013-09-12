Crafty.scene('Loading', function() {

    Crafty.load(['assets/grass.png'], function() {
        Crafty.sprite(31, 'assets/martha-jones.png', {
            spr_martha: [0,0]
        });
        Crafty.sprite(31, 'assets/rose-tyler.png', {
            spr_rose_dark: [0,0],
            spr_rose_light: [1,0]
        });

        Crafty.scene('Game');
    })
});

Crafty.scene('Game', function() {
    Crafty.e('PlayerCharacter').at(5,5);

    for(var x=0; x < Game.map_grid.width; x++) {
        for(var y=0; y < Game.map_grid.height; y++) {
            var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;

            if(at_edge) {
                Crafty.e('Tree').at(x, y);
            } else if(Math.random() < 0.06) {
                Crafty.e('Human').at(x, y);
            }
        }
    }

});
