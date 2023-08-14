class Sprite {
    constructor(config) {
        //set up the image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => { 
            this.isLoaded = true;
        }

        // sprite shadow
        this.shadow = new Image();
        this.useShadow = true;
        if (this.useShadow) {
            this.shadow.src = "static/images/shadow.png";
        }
        this.shadow.onload = () => {
            this.isShdowLoaded = true;
        }

        // configure animations
        this.animations = config.animations || {
            idle: "static/images/player/elf_female_idle1.png",
        }
        this.currentAnimation = config.currentAnimation || 'idle';
        this.currentAnimationFrame = 1

        // Ref the game object
        this.gameObject = config.gameObject;
    }
    draw(ctx) {
        const x = this.gameObject.x;
        const y = this.gameObject.y;
        const w = this.gameObject.width;
        const h = this.gameObject.height;
        const shadowX = this.gameObject.shadowX;
        const shadowY = this.gameObject.shadowY;
        const shadowW = this.gameObject.shadowW
        const shadowH = this.gameObject.shadowH
        this.isShdowLoaded && ctx.drawImage(this.shadow, x + shadowX, y + shadowY, this.shadow.width * shadowW, this.shadow.height * shadowH);
        this.isLoaded && ctx.drawImage(this.image, x, y, this.image.width * w, this.image.height * h);
    }
}