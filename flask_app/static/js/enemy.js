class Enemy {
    constructor(imageSource, attack_image_source) {
        this.hp = 100;
        this.image = new Image();
        this.image.src = imageSource
        this.attack_image = new Image();
        this.attack_image.src = attack_image_source
    }

}

