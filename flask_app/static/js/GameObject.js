class GameObject {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.width = config.width || 1;
        this.height = config.height || 1;
        this.shadowX = config.shadowX || this.x;
        this.shadowY = config.shadowY || this.y;
        this.shadowW = config.shadowW || this.width;
        this.shadowH = config.shadowH || this.height;
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "static/images/player/elf_female_idle1.png",
        });
    }

}