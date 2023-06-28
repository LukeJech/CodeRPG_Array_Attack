class Level {
    constructor() {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = 1920;
        this.height = 1080;
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.ctx.font = '24px Poppins';
        this.ctx.fillStyle = 'white';
        this.backgroundImage = new Image();
        this.backgroundImage.src = "static/images/level_bg/mushroom_forest.png";
    }
    draw_all_game_objects(player, enemy){
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.backgroundImage, 0, 0, this.width, this.height);
        this.ctx.drawImage(player.image, 400, 400, player.image.width * 0.4, player.image.height * 0.4);
        this.ctx.fillText(`${player.hp}hp`, 545, 725);
        this.ctx.drawImage(enemy.image, 1200, 520, enemy.image.width * 0.6, enemy.image.height * 0.6);
        this.ctx.fillText(`${enemy.hp}hp`, 1245, 725);
    }
}

const level = new Level();