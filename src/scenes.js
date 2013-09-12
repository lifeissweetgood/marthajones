Crafty.scene('Loading', function() {
    Crafty.load(['assets/grass.png'], function() {
        Crafty.sprite(31, 'assets/martha-jones.png', {
            spr_martha: [0,0]
        });
        Crafty.sprite(31, 'assets/rose-tyler.png', {
            spr_rose_dark: [0,0],
            spr_rose_light: [1,0]
        });
    })
});
