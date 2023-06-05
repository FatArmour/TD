// Get the class/element
const canvas = document.getElementById("canvas");

// Getting 2d context for canvass
const context = canvas.getContext("2d");

// Dimensions of first game map
canvas.width = 1280;
canvas.height = 768;

// Make Canvas, set dimensions
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();

//
//
//
//
//
//
//
//
//
//

// Make an enemy, draw it, animate it with update

// Building Placements

// const placementTilesData2DMap1 = [];

// for (let i = 0; i < placementTilesDataMap1.length; i += 20) {
//   placementTilesData2DMap1.push(placementTilesDataMap1.slice(i, i + 20));
// }

// class PlacementTile {
//   constructor({ position = { x: 0, y: 0 } }) {
//     this.position = position;
//     this.size = 64;
//     this.color = "rgba(2, 222, 222, .15)";
//   }
//   draw() {
//     context.fillStyle = this.color;
//     context.fillRect(this.position.x, this.position.y, this.size, this.size);
//   }

//   update(mouse) {
//     this.draw();
//     if (
//       mouse.x > this.position.x &&
//       mouse.x < this.position.x + this.size &&
//       mouse.y > this.position.y &&
//       mouse.y < this.position.y + this.size
//     ) {
//       console.log("colliding");
//     } else {
//     }
//   }
// }

// const placementTilesMap1 = [];

// placementTilesData2DMap1.forEach((row, y) => {
//   row.forEach((symbol, x) => {
//     if (symbol === 43) {
//       // Add Building Placement Tile Here
//       placementTilesMap1.push(
//         new PlacementTile({
//           position: {
//             x: x * 64,
//             y: y * 64,
//           },
//         })
//       );
//     }
//   });
// });

// Movement
