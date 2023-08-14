class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 1920;
        this.canvas.height = 1080;
    }
    
    init() {
        const image = new Image();
        image.onload = () => { 
            this.ctx.drawImage(image, 0, 0);

        };
        image.src = "static/images/level_bg/mushroom_forest.png";

        // place game object
        const player = new GameObject({
            x:300,
            y:400, 
            width: .4,
            height: .4,
        })

        const enemey = new GameObject({
            x:1200,
            y:450,
            width: .9,
            height: .9,
            shadowX: -80,
            shadowY: -200,
            shadowW: .6,
            shadowH: .6,
            src: "static/images/enemies/bat_idle.png"
        })

        setTimeout(() => {
            player.sprite.draw(this.ctx);
            enemey.sprite.draw(this.ctx);

        }  , 200);
    }
}