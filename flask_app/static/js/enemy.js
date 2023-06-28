class Enemy {
    constructor(ctx) {
        this.hp = 100;
        this.image = new Image();
        this.ctx = ctx
    }

    drawEnemyImage() {
        this.image.src = "static/images/enemies/skeleton_idle_0.png";
        this.ctx.drawImage(this.image, 1200, 520, this.image.width * 0.6, this.image.height * 0.6);
        this.ctx.fillText(`${this.hp}hp`, 1245, 725);
    }
}