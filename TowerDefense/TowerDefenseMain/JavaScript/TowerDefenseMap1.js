(function (name, data) {
  if (typeof onTileMapLoaded === "undefined") {
    if (typeof TileMaps === "undefined") TileMaps = {};
    TileMaps[name] = data;
  } else {
    onTileMapLoaded(name, data);
  }
  if (typeof module === "object" && module && module.exports) {
    module.exports = data;
  }
})("TowerDefenseMap1", {
  compressionlevel: -1,
  height: 12,
  infinite: false,
  layers: [
    {
      data: [
        1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8,
        5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8, 9, 10, 11, 12, 9, 10,
        11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 13, 14, 15, 16, 13,
        14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 1, 2, 3, 4,
        1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 5, 6, 7, 8,
        5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10,
        11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 13, 14, 15, 16, 13, 14, 15, 16,
        13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 1, 2, 3, 4, 1, 2, 3, 4,
        1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8,
        5, 6, 7, 8, 5, 6, 7, 8, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9,
        10, 11, 12, 9, 10, 11, 12, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15,
        16, 13, 14, 15, 16, 13, 14, 15, 16,
      ],
      height: 12,
      id: 1,
      locked: true,
      name: "Background",
      opacity: 1,
      type: "tilelayer",
      visible: true,
      width: 20,
      x: 0,
      y: 0,
    },
    {
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 17, 22, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 17, 22, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 17, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 21, 17, 22, 0, 0, 0, 18, 19, 19, 19, 19, 19, 19,
        19, 19, 19, 19, 20, 0, 0, 21, 17, 22, 0, 0, 0, 21, 17, 17, 17, 17, 17,
        17, 17, 17, 17, 17, 22, 0, 0, 21, 17, 22, 0, 0, 0, 21, 17, 26, 24, 24,
        24, 24, 24, 24, 27, 17, 22, 0, 0, 21, 17, 22, 0, 0, 0, 21, 17, 22, 0, 0,
        0, 0, 0, 0, 21, 17, 22, 0, 0, 21, 17, 22, 0, 0, 0, 21, 17, 22, 0, 0, 0,
        0, 0, 0, 21, 17, 28, 19, 19, 29, 17, 22, 0, 0, 0, 21, 17, 22, 0, 0, 0,
        0, 0, 0, 21, 17, 17, 17, 17, 17, 17, 22, 0, 0, 0, 21, 17, 22, 0, 0, 0,
        0, 0, 0, 23, 24, 24, 24, 24, 24, 24, 25, 0, 0, 0, 21, 17, 22, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      height: 12,
      id: 2,
      locked: true,
      name: "Map",
      opacity: 1,
      type: "tilelayer",
      visible: true,
      width: 20,
      x: 0,
      y: 0,
    },
    {
      draworder: "topdown",
      id: 4,
      name: "Object Layer 1",
      objects: [
        {
          height: 0,
          id: 5,
          name: "",
          polyline: [
            {
              x: 0,
              y: 0,
            },
            {
              x: -175.328741390106,
              y: 864.120225422667,
            },
            {
              x: 275.516593613024,
              y: 857.858484658735,
            },
            {
              x: 278.647463994991,
              y: 363.180964308078,
            },
            {
              x: 876.643706950532,
              y: 366.311834690044,
            },
            {
              x: 876.643706950532,
              y: 601.127113337508,
            },
            {
              x: 1180.33813400125,
              y: 604.257983719474,
            },
            {
              x: 1186.59987476518,
              y: -43.8321853475266,
            },
          ],
          rotation: 0,
          type: "",
          visible: true,
          width: 0,
          x: 0,
          y: 0,
        },
      ],
      opacity: 1,
      type: "objectgroup",
      visible: true,
      x: 0,
      y: 0,
    },
  ],
  nextlayerid: 5,
  nextobjectid: 6,
  orientation: "orthogonal",
  renderorder: "right-down",
  tiledversion: "1.10.1",
  tileheight: 64,
  tilesets: [
    {
      firstgid: 1,
      source: "../Desktop/Map1Files/Map1Images/Map1SavedImages/Sand.tsx",
    },
    {
      firstgid: 17,
      source: "../Desktop/Map1Files/Map1Images/Map1SavedImages/road_5.tsx",
    },
    {
      firstgid: 18,
      source: "../Desktop/Map1Files/Map1Images/Map1SavedImages/TopLeftRoad.tsx",
    },
    {
      firstgid: 19,
      source: "../Desktop/Map1Files/Map1Images/Map1SavedImages/TopRoad.tsx",
    },
    {
      firstgid: 20,
      source:
        "../Desktop/Map1Files/Map1Images/Map1SavedImages/TopRightRoad.tsx",
    },
    {
      firstgid: 21,
      source: "../Desktop/Map1Files/Map1Images/Map1SavedImages/LeftRoad.tsx",
    },
    {
      firstgid: 22,
      source: "../Desktop/Map1Files/Map1Images/Map1SavedImages/RightRoad.tsx",
    },
    {
      firstgid: 23,
      source: "../Desktop/Map1Files/Decor/BottomLeftRoad.tsx",
    },
    {
      firstgid: 24,
      source: "../Desktop/Map1Files/Map1Images/Map1SavedImages/BottomRoad.tsx",
    },
    {
      firstgid: 25,
      source:
        "../Desktop/Map1Files/Map1Images/Map1SavedImages/BottomRightRoad.tsx",
    },
    {
      firstgid: 26,
      source:
        "../Desktop/Map1Files/Map1Images/Map1SavedImages/BottomTopLeftRoad.tsx",
    },
    {
      firstgid: 27,
      source:
        "../Desktop/Map1Files/Map1Images/Map1SavedImages/BottomTopRightRoad.tsx",
    },
    {
      firstgid: 28,
      source:
        "../Desktop/Map1Files/Map1Images/Map1SavedImages/TopBottomLeftRoad.tsx",
    },
    {
      firstgid: 29,
      source:
        "../Desktop/Map1Files/Map1Images/Map1SavedImages/TopBottomRightRoad.tsx",
    },
  ],
  tilewidth: 64,
  type: "map",
  version: "1.10",
  width: 20,
});
