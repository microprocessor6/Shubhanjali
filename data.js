var APP_DATA = {
  "scenes": [
    {
      "id": "0-cabin",
      "name": "Cabin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.1021325945823595,
        "pitch": 0.1638003626298712,
        "fov": 1.353340209980609
      },
      "linkHotspots": [
        {
          "yaw": 0.7581151974004356,
          "pitch": 0.4878271936967984,
          "rotation": 7.0685834705770345,
          "target": "1-spot-1-radha-krishna"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-spot-1-radha-krishna",
      "name": "spot 1-Radha Krishna",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.094512464482463,
        "pitch": -0.03572379892700894,
        "fov": 1.353340209980609
      },
      "linkHotspots": [
        {
          "yaw": -0.9978357726666474,
          "pitch": -0.017034135418844798,
          "rotation": 20.420352248333668,
          "target": "0-cabin"
        },
        {
          "yaw": 0.7877759390731711,
          "pitch": 0.3997438861261511,
          "rotation": 5.497787143782138,
          "target": "2-spot-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-spot-2",
      "name": "spot 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7502146600600845,
          "pitch": 0.0436173261628916,
          "rotation": 7.853981633974483,
          "target": "1-spot-1-radha-krishna"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Shubhanjali-direct",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
