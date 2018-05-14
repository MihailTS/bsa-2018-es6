class Fighter {
    constructor(name = "Agent Smith", power = 9000, health = 1000000) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    hit(enemy, point = 1) {
        enemy.setDamage(point * this.power);
    }

    setDamage(damage = 0) {
        this.health = this.health - damage;
        console.log(`health: ${this.health}`);
    }
}

class ImprovedFighter extends Fighter {
    constructor(name = "Neo", power = 9001, health = 1000000) {
        super(name, power, health);
    }

    doubleHit(enemy, point = 1) {
        this.hit(enemy, point * 2);
    }
}

let fighter = new Fighter();
let improvedFighter = new ImprovedFighter();

let fight = (fighter, improvedFighter, ...points) =>
{
    let attacker = fighter;
    let target = improvedFighter;
    let pointIndex = 0;
    let tmp;

    while(true){
        attacker.hit(target, points[pointIndex]);
        if(target.health <= 0) {
            console.log(`${attacker.name} wins!`);
            break;
        }

        tmp = attacker;
        attacker = target;
        target = tmp;

        if(pointIndex === points.length - 1) {
            pointIndex = 0;
        } else {
            pointIndex++;
        }
    }
};

fight(fighter, improvedFighter, 4, 5, 1, 6, 4);
