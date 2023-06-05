document.getElementById("map1").addEventListener("click", gameMap1Clicked);

function gameMap1Clicked() {
  // Setting Game Map as Canvas
  class Enemy {
    constructor({ position = { x: 0, y: 0 } }) {
      this.position = position;
      this.width = 100;
      this.height = 100;
      this.waypointIndex = 0;
      this.center = {
        x: this.position.x + this.width / 2,
        y: this.position.y + this.height / 2,
      };
      Enemy.health = 100;
    }

    draw() {
      context.fillStyle = "red";
      context.fillRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );

      // Health Bars

      context.fillStyle = "red";
      context.fillRect(this.position.x, this.position.y - 15, this.width, 10);

      context.fillStyle = "green";
      context.fillRect(
        this.position.x,
        this.position.y - 15,
        (this.width * Enemy.health) / 100,
        10
      );
    }

    update() {
      this.draw();

      const waypoint = wayPoints[this.waypointIndex];
      const yDistance = waypoint.y - this.center.y;
      const xDistance = waypoint.x - this.center.x;
      const angle = Math.atan2(yDistance, xDistance);
      this.position.x += Math.cos(angle);
      this.position.y += Math.sin(angle);
      this.center = {
        x: this.position.x + this.width / 2,
        y: this.position.y + this.height / 2,
      };

      if (
        Math.round(this.center.x) === Math.round(waypoint.x) &&
        Math.round(this.center.y) === Math.round(waypoint.y)
      ) {
        this.waypointIndex += 1;
      }
    }
  }

  // Hero

  let hero = {
    x: 200,
    y: 550,
    w: 50,
    h: 50,
    vx: 0,
    vy: 0,
    health: 1500,
  };

  requestAnimationFrame(draw);

  function draw() {
    context.fillStyle = "blue";
    context.fillRect(hero.x, hero.y, hero.w, hero.h);

    context.fillStyle = "red";
    context.fillRect(hero.x, hero.y - 15, hero.w, 10);

    context.fillStyle = "green";
    context.fillRect(hero.x, hero.y - 15, hero.w, 10);

    // hero.x += vx;
    // hero.y += vy;
    requestAnimationFrame(draw);
  }
  function heroAttack() {
    Enemy.health -= 20;
  }

  document.addEventListener("keydown", keydownHandler);

  // window.addEventListener("keydown", function (e) {
  //   if (e.key == "w") {
  //     vy = -10;
  //   }
  // });

  function keydownHandler(event) {
    if (event.code == "ArrowRight" && hero.x < 310) {
      hero.x += 10;
      console.log(hero.x);
    } else if (event.code == "ArrowLeft" && hero.x > 210) {
      hero.x += -10;
      console.log(hero.x);
    } else if (event.code == "ArrowUp" && hero.y > 290) {
      hero.y += -10;
      console.log(hero.y);
    } else if (event.code == "ArrowDown" && hero.y < 720) {
      hero.y += 10;
      console.log(hero.y);
    } else if (event.code == "Space") {
      heroAttack();
      console.log(Enemy.health);
    }
  }

  function update() {
    draw();
  }

  // Building Placement

  const placementTilesData2DMap1 = [];

  for (let i = 0; i < placementTilesDataMap1.length; i += 20) {
    placementTilesData2DMap1.push(placementTilesDataMap1.slice(i, i + 20));
  }

  class PlacementTile {
    constructor({ position = { x: 0, y: 0 } }) {
      this.position = position;
      this.size = 64;
      this.color = "rgba(2, 222, 222, .15)";
    }
    draw() {
      context.fillStyle = this.color;
      context.fillRect(this.position.x, this.position.y, this.size, this.size);
    }

    update(mouse) {
      this.draw();
      if (
        mouse.x > this.position.x &&
        mouse.x < this.position.x + this.size &&
        mouse.y > this.position.y &&
        mouse.y < this.position.y + this.size
      ) {
        console.log("colliding");
      } else {
      }
    }
  }

  const placementTilesMap1 = [];

  placementTilesData2DMap1.forEach((row, y) => {
    row.forEach((symbol, x) => {
      if (symbol === 43) {
        // Add Building Placement Tile Here
        placementTilesMap1.push(
          new PlacementTile({
            position: {
              x: x * 64,
              y: y * 64,
            },
          })
        );
      }
    });
  });

  image.onload = () => {
    context.drawImage(image, 0, 0);
  };
  image.src = "img/TowerDefenseMap1.png";

  const enemies = [];

  function spawnEnemies() {
    for (let i = 1; i < 10; i++) {
      const xOffset = i * 150;
      enemies.push(
        new Enemy({
          position: { x: wayPoints[0].x - xOffset, y: wayPoints[0].y },
        })
      );
    }
    console.log("hello");
  }

  const enemyIndex = enemies.findIndex((enemy) => {
    return hero.x === 210;
  });

  if (Enemy.health <= 0) {
    enemies.splice(enemyIndex, 1);
  }

  // Animating the game

  function animate() {
    requestAnimationFrame(animate);

    context.drawImage(image, 0, 0);
    enemies.forEach((enemy) => {
      enemy.update();
    });
    update();
    placementTilesMap1.forEach((tile) => {
      tile.update(mouse);
    });
  }

  const mouse = {
    x: undefined,
    y: undefined,
  };

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });

  spawnEnemies();
  animate();
}
