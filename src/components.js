Crafty.c('Grid', {
    init: function() {
        this.attr({
            w: Game.map_grid.tile.width,
            h: Game.map_grid.tile.height
        })
    },

    at: function(x, y) {
        if( x === undefined && y === undefined) {
            return { 
                x: this.x / Game.map_grid.tile.width,
                y: this.y / Game.map_grid.tile.height
            }
        } else {
            this.attr({
                x : x * Game.map_grid.tile.width,
                y : y * Game.map_grid.tile.height
            });
            return this;
        }
    }
});

Crafty.c('Actor', {
    init: function() {
        this.requires('2D, Canvas, Grid');
    },
});

Crafty.c('PlayerCharacter', {
    init: function() {
        this.requires('Actor, Fourway, Collision,spr_martha')
        .fourway(4)
        .stopOnSolids()
        // Whenever entity hits a solid entity, do stuff to solid entity
        .onHit('Human', this.tellHuman);
    },

    // Registers a stop-movement function to be called when this entity
    // hits an entity with "Solids" enabled.
    stopOnSolids: function() {
        this.onHit('Solid', this.stopMovement);
        return this;
    },

    // Stops the movement
    stopMovement: function() {
        this._speed = 0;
        if(this._movement) {
            this.x -= this._movement.x;
            this.y -= this._movement.y;
        }
    },

    // "Tell" human about the doctor
    tellHuman: function(data) {
        human = data[0].obj;
        human.inform();
    }
});

Crafty.c('Human', {
    init: function() {
        this.requires('Actor, spr_rose_light');
    },

    inform: function() {
        this.destroy();
    }
});

Crafty.c('Tree', {
    init: function() {
        this.requires('Actor, Color, Solid');
        this.color('rgb(20, 125, 40)');
    },
});
