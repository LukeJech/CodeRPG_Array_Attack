class Enemy {
    constructor(imageSource) {
        this.hp = 100;
        this.image = new Image();
        this.image.src = imageSource
    }

}

const enemy = new Enemy("static/images/enemies/skeleton_idle_0.png")