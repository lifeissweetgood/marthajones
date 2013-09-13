Game = {
    // Defines size of grid and size of tiles in grid
    map_grid: {
        width: 40,
        height: 32,
        tile: {
            width: 32,
            height:32
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

        Crafty.scene('Loading');
    }
}
