const enemies = ['plant', 'skeleton', 'bat']
const randomEnemy = () => enemies[Math.floor(Math.random() * enemies.length)];
export {randomEnemy};