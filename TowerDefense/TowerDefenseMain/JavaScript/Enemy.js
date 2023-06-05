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
    this.health = 100;
  }

  draw() {
    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);

    // Health Bars

    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y - 15, this.width, 10);

    context.fillStyle = "green";
    context.fillRect(this.position.x, this.position.y - 15, this.width, 10);
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
