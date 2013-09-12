Game = {
    // Defines size of grid and size of tiles in grid
    map_grid: {
        width: 24,
        height: 16,
        tile: {
            width: 16,
            height:16
        }
    },

    // Total width of the game screen
    width: function() {
        return this.map_grid.width * this.map_grid.tile.width;
    },

    // Total height of the game screen
    height: function() {
        return this.map_grid.height * this.map_grid.tile.height;
    },

    // Initialize and start game
    start: function() {
        // Start crafty and set background color
        Crafty.init(Game.width(), Game.height());
        Crafty.background('rgb(249, 223, 125)');

        for(var x=0; x < Game.map_grid.width; x++) {
            for(var y=0; y < Game.map_grid.height; y++) {
                var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;

                if(at_edge) {
                    Crafty.e('Tree').at(x, y);
                } else if(Math.random() < 0.06) {
                    Crafty.e('Bush').at(x, y);
                }
            }
        }
    }
}
