// //
// if (enemy.position.x > canvas.width) {
//   hearts -= 1
//   enemies.splice(i, 1)
//   document.querySelector('#hearts').innerHTML = hearts

//   if (hearts === 0) {
//     console.log('game over')
//     cancelAnimationFrame(animationId)
//     document.querySelector('#gameOver').style.display = 'flex'

//
//
//

document.getElementById("map3").addEventListener("click", gameMap3Clicked);

function gameMap3Clicked() {
  class Enemy {
    constructor({ position = { x: 0, y: 0 } }) {
      this.position = position;
      this.width = 80;
      this.height = 80;
      this.waypointIndex = 0;
      this.center = {
        x: this.position.x + this.width / 2,
        y: this.position.y + this.height / 2,
      };
      this.health = 100;
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
      context.fillRect(this.position.x, this.position.y - 15, this.width, 10);
    }

    update() {
      this.draw();

      const waypoint = wayPointsMap3[this.waypointIndex];
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

  class Enemy2 {
    constructor({ position = { x: 0, y: 0 } }) {
      this.position = position;
      this.width = 80;
      this.height = 80;
      this.waypointIndex = 0;
      this.center = {
        x: this.position.x + this.width / 2,
        y: this.position.y + this.height / 2,
      };
      this.health = 150;
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
      context.fillRect(this.position.x, this.position.y - 15, this.width, 10);
    }

    update() {
      this.draw();

      const waypoint = wayPoints2Map3[this.waypointIndex];
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

  class Hero {
    constructor({ position = { x: 100, y: 100 } }) {
      this.position = position;
      this.width = 80;
      this.height = 80;
      this.center = {
        x: this.position.x + this.width / 2,
        y: this.position.y + this.height / 2,
      };
      this.health = 1500;
    }

    draw() {
      context.fillStyle = "green";
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
      context.fillRect(this.position.x, this.position.y - 15, this.width, 10);
    }

    update() {
      this.draw();

      document.addEventListener("keydown", keydownHandler);

      function keydownHandler(event) {
        // if (event.repeat == false)
        {
          if (event.code == "ArrowRight" && player.x < 1280) {
            player.x += 50;
          } else if (event.code == "ArrowLeft" && player.x > 0) {
            player.x += -50;
          } else if (event.code == "ArrowUp" && player.y > 0) {
            player.y += -50;
          } else if (event.code == "ArrowDown" && player.y < 768) {
            player.y += 50;
          }
        }
      }
    }
  }
  // Map 3
  image.onload = () => {
    context.drawImage(image, 0, 0);
  };
  image.src = "img/TowerDefenseMap3.png";

  const enemies = [];
  for (let i = 1; i < 10; i++) {
    const xOffset = i * 150;
    enemies.push(
      new Enemy({
        position: { x: wayPointsMap3[0].x - xOffset, y: wayPointsMap3[0].y },
      })
    );
  }

  const enemies2 = [];
  for (let i = 1; i < 10; i++) {
    const xOffset = i * 150;
    enemies2.push(
      new Enemy2({
        position: { x: wayPoints2Map3[0].x - xOffset, y: wayPoints2Map3[0].y },
      })
    );
  }

  // Animating the game

  function animate() {
    requestAnimationFrame(animate);

    context.drawImage(image, 0, 0);
    enemies.forEach((enemy) => {
      enemy.update();
    });

    enemies2.forEach((enemy2) => {
      enemy2.update();
    });
  }

  animate();
}
