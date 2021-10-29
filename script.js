(function(){
    var script = {
 "start": "this.init()",
 "children": [
  "this.MainViewer"
 ],
 "id": "rootPlayer",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "width": "100%",
 "backgroundPreloadEnabled": true,
 "paddingRight": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "borderSize": 0,
 "class": "Player",
 "minHeight": 20,
 "definitions": [{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 150,
  "yaw": -82.9,
  "pitch": -0.71,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 143,
  "yaw": 99.19,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_C955B275_C535_5F57_41E8_A35B8AEDF73D",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Manger office middle  (88)",
 "id": "panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23",
 "overlays": [
  "this.overlay_D6A75CF5_C266_FCE4_41AA_115856282806",
  "this.overlay_D5F82591_C2A7_AD3D_41D0_6F9A6B4E66DE"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -148.64,
   "panorama": "this.panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41",
   "yaw": 69.17,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_t.jpg"
},
{
 "hfov": 360,
 "hfovMin": "139%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Hall (119)",
 "overlays": [
  "this.overlay_D3894882_C1A2_631F_41E0_762A5EBAE464"
 ],
 "id": "panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 96.59,
   "panorama": "this.panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A",
   "yaw": 79.6,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 150,
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_t.jpg"
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Hall between con & man office (77) ",
 "overlays": [
  "this.overlay_D34179C2_C19E_A51C_41CB_D1269C25484A",
  "this.overlay_D35798A4_C19E_E364_41DF_B5CAF9C38D30",
  "this.overlay_D0DE3EBF_C262_9F65_41DC_7627865FF3E7",
  "this.overlay_D569B8A3_C2A7_A31D_41DD_C8D895DCFB3E"
 ],
 "id": "panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 105.89,
   "panorama": "this.panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104",
   "yaw": -80.31,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 79.6,
   "panorama": "this.panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5",
   "yaw": 96.59,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 74.69,
   "panorama": "this.panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41",
   "yaw": -151.09,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 59.05,
   "panorama": "this.panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1",
   "yaw": -37.41,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 150,
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_t.jpg"
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 148,
  "yaw": 71.54,
  "pitch": 2.44,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 150,
  "yaw": -83.41,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_C9BB4291_C535_5FAF_41E2_20398EF879E4",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 150,
  "yaw": 28.91,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_C910B251_C535_5EAF_41E3_EB1B7DB6E1C8",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 163.37,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_C9761263_C535_5F73_41CD_2B9FA19BC6C5",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Men Bathroom",
 "overlays": [
  "this.overlay_D189FF56_C262_9D27_41E7_152995B0DB82"
 ],
 "id": "panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 26.65,
   "panorama": "this.panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7",
   "yaw": -80.81,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 150,
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_t.jpg"
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 143,
  "yaw": -153.35,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_C94B3288_C535_5FBD_41E4_E385E438ACC1",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.09,
  "pitch": 9.03,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Conference table side (64)",
 "overlays": [
  "this.overlay_D15CAC62_C262_E31F_41D1_06838BAF15F8",
  "this.overlay_D6D09B6A_C27E_E5EF_41E6_C5BD6BBE6E2A"
 ],
 "id": "panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -16.63,
   "panorama": "this.panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41",
   "yaw": -116.74,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 150,
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_t.jpg"
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 132,
  "yaw": 91.64,
  "pitch": 5.39,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 143,
  "yaw": 11.3,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_CEC28236_C535_5ED5_41CA_DDB2AFEFDC34",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 150,
  "yaw": 142.59,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_C99972A3_C535_5FF3_41D4_07EA11E1B493",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 143,
  "yaw": 70.07,
  "pitch": -3.2,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -110.83,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_C906525A_C535_5F5D_41DB_051CDF2B1A38",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 140,
  "yaw": 84.36,
  "pitch": -6.62,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 122,
  "yaw": 63.26,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_C9AAB29A_C535_5FDD_41DD_714EF739EB86",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Conference mid view",
 "overlays": [
  "this.overlay_D112B9E4_C266_A51B_41E1_A79558A49119",
  "this.overlay_D6A31DBA_C27F_9D6F_41E8_28AECCC1B2F4"
 ],
 "id": "panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -37.41,
   "panorama": "this.panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A",
   "yaw": 59.05,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 150,
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_t.jpg"
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Bathroomm hall",
 "overlays": [
  "this.overlay_D1AE350B_C26F_ED2D_41E4_0D85EEDC273E",
  "this.overlay_D51EE4DC_C2A2_E32B_41DC_92F8601EB317"
 ],
 "id": "panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -80.81,
   "panorama": "this.panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6",
   "yaw": 26.65,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 128,
   "panorama": "this.panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104",
   "yaw": -168.7,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 150,
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_t.jpg"
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Manager office entrance (85)",
 "overlays": [
  "this.overlay_D57F1CF6_C265_9CE7_41D9_E596FFD3C8E6",
  "this.overlay_D4611EB3_C262_FF7D_41E5_15A412990C63"
 ],
 "id": "panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -151.09,
   "panorama": "this.panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A",
   "yaw": 74.69,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 69.17,
   "panorama": "this.panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23",
   "yaw": -148.64,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 150,
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_t.jpg"
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 150,
  "yaw": 31.36,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_C966126C_C535_5F75_41D3_E090E9A6954B",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Conference table middle (56)",
 "id": "panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41",
 "overlays": [
  "this.overlay_D704C7F1_C262_ACFD_41C8_057DFC26EED6",
  "this.overlay_D789EAFF_C263_E4E4_41D0_301A56D857ED"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -116.74,
   "panorama": "this.panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D",
   "yaw": -16.63,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_t.jpg"
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 150,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -155.01,
  "pitch": 0.25,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 140,
  "yaw": -52,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_C945B27E_C535_5F55_41E7_0BD69267412F",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Kitchen (118)",
 "overlays": [
  "this.overlay_D67BE022_C262_A31F_41E3_44BD1D1C9ECC",
  "this.overlay_D58DC39A_C2A6_652F_41D4_1D062C1C9853"
 ],
 "id": "panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -168.7,
   "panorama": "this.panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7",
   "yaw": 128,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -168.7,
   "panorama": "this.panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7",
   "yaw": 128,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -80.31,
   "panorama": "this.panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A",
   "yaw": 105.89,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 150,
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_t.jpg"
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 150,
  "yaw": 99.69,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_C920E248_C535_5EBD_41C0_2BA4E2C7B30A",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 140,
  "yaw": -74.11,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_CE8E2211_C535_5EAF_41E2_02F6AC8ED6D4",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 122,
  "yaw": -88.79,
  "pitch": -4.23,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 132,
  "yaw": -120.95,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_CED3422D_C535_5EF7_41BB_C46B2E597CA6",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 143,
  "yaw": 8.55,
  "pitch": -6.99,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 150,
  "yaw": -105.31,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_CEECD224_C535_5EF5_41D0_1E0ADCFED2D8",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5",
   "camera": "this.panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A",
   "camera": "this.panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23",
   "camera": "this.panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41",
   "camera": "this.panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41",
   "camera": "this.panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D",
   "camera": "this.panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1",
   "camera": "this.panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7",
   "camera": "this.panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6",
   "camera": "this.panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 143,
  "yaw": 11.3,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_C932823F_C535_5ED3_41D1_32F959FB841A",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "automaticRotationSpeed": 0,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 148,
  "yaw": -100.4,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_CEFC721B_C535_5ED3_41D9_A2C20432375B",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "id": "MainViewer",
 "toolTipPaddingLeft": 6,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 5,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingLeft": 0,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBorderColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "toolTipPaddingBottom": 4,
 "paddingTop": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "shadow": false,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingRight": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "transitionMode": "blending",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41, this.camera_C966126C_C535_5F75_41D3_E090E9A6954B); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 69.17,
   "hfov": 19.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_1_HS_2_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DB3A2E69_C262_BFED_41DE_63859FE36FB4",
   "yaw": 69.17,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -47.09,
   "distance": 100,
   "hfov": 19.44
  }
 ],
 "id": "overlay_D6A75CF5_C266_FCE4_41AA_115856282806",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 26.65,
   "hfov": 11.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DB333EB8_C2A6_9F6B_41B9_188642F3C6E1",
   "yaw": 26.65,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.92,
   "distance": 100,
   "hfov": 11.84
  }
 ],
 "id": "overlay_D5F82591_C2A7_AD3D_41D0_6F9A6B4E66DE",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A, this.camera_C9BB4291_C535_5FAF_41E2_20398EF879E4); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 79.6,
   "hfov": 23.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_1_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DB386E68_C262_BFEB_41E2_2FE9DE3F125E",
   "yaw": 79.6,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -30.21,
   "distance": 100,
   "hfov": 23.16
  }
 ],
 "id": "overlay_D3894882_C1A2_631F_41E0_762A5EBAE464",
 "data": {
  "label": "Arrow 03a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1, this.camera_CED3422D_C535_5EF7_41BB_C46B2E597CA6); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -37.41,
   "hfov": 18.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DB389E68_C262_BFEB_41D8_CDC73A74A35E",
   "yaw": -37.41,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -9.88,
   "distance": 100,
   "hfov": 18.6
  }
 ],
 "id": "overlay_D34179C2_C19E_A51C_41CB_D1269C25484A",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41, this.camera_CEECD224_C535_5EF5_41D0_1E0ADCFED2D8); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -151.09,
   "hfov": 16.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DB393E69_C262_BFED_41E0_D4D5524FFC8F",
   "yaw": -151.09,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -6.11,
   "distance": 100,
   "hfov": 16.52
  }
 ],
 "id": "overlay_D35798A4_C19E_E364_41DF_B5CAF9C38D30",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104, this.camera_CE8E2211_C535_5EAF_41E2_02F6AC8ED6D4); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -80.31,
   "hfov": 21.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_1_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DB39CE69_C262_BFED_41DD_F404058E85D8",
   "yaw": -80.31,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.91,
   "distance": 100,
   "hfov": 21.18
  }
 ],
 "id": "overlay_D0DE3EBF_C262_9F65_41DC_7627865FF3E7",
 "data": {
  "label": "Arrow 03a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5, this.camera_CEFC721B_C535_5ED3_41D9_A2C20432375B); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 96.59,
   "hfov": 11.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D8D53E0E_C2A6_9F24_41DD_D5019D6DFF65",
   "yaw": 96.59,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.04,
   "distance": 100,
   "hfov": 11.72
  }
 ],
 "id": "overlay_D569B8A3_C2A7_A31D_41DD_C8D895DCFB3E",
 "data": {
  "label": "Arrow 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7, this.camera_C94B3288_C535_5FBD_41E4_E385E438ACC1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -80.81,
   "hfov": 16.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_1_HS_1_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -53.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DB34DE6A_C262_BFEF_41C3_5775727208FA",
   "yaw": -80.81,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -53.82,
   "distance": 100,
   "hfov": 16.26
  }
 ],
 "id": "overlay_D189FF56_C262_9D27_41E7_152995B0DB82",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41, this.camera_C9761263_C535_5F73_41CD_2B9FA19BC6C5); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -116.74,
   "hfov": 18.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0_HS_1_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DA2FD355_C26D_A525_41E7_C2B5575BE044",
   "yaw": -116.74,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.7,
   "distance": 100,
   "hfov": 18.36
  }
 ],
 "id": "overlay_D15CAC62_C262_E31F_41D1_06838BAF15F8",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -117.55,
   "hfov": 10.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DB95B014_C265_A33B_41CD_D33CC5D33C6F",
   "yaw": -117.55,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.34,
   "distance": 100,
   "hfov": 10.33
  }
 ],
 "id": "overlay_D6D09B6A_C27E_E5EF_41E6_C5BD6BBE6E2A",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 148.81,
   "hfov": 18.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DB3BAE6A_C262_BFEF_41E2_C237756B581C",
   "yaw": 148.81,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -26.44,
   "distance": 100,
   "hfov": 18.83
  }
 ],
 "id": "overlay_D112B9E4_C266_A51B_41E1_A79558A49119",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A, this.camera_C99972A3_C535_5FF3_41D4_07EA11E1B493); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 59.05,
   "hfov": 11.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DB950015_C265_A325_41DE_6F87A0B51662",
   "yaw": 59.05,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.67,
   "distance": 100,
   "hfov": 11.84
  }
 ],
 "id": "overlay_D6A31DBA_C27F_9D6F_41E8_28AECCC1B2F4",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6, this.camera_C955B275_C535_5F57_41E8_A35B8AEDF73D); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 26.65,
   "hfov": 18.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DB347E6A_C262_BFEF_41E2_1291D4F1F76A",
   "yaw": 26.65,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -6.74,
   "distance": 100,
   "hfov": 18.25
  }
 ],
 "id": "overlay_D1AE350B_C26F_ED2D_41E4_0D85EEDC273E",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104, this.camera_C945B27E_C535_5F55_41E7_0BD69267412F); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -168.7,
   "hfov": 19.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0_HS_5_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D9081EBD_C2BF_9F65_41E6_FCD7C7FDDED1",
   "yaw": -168.7,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -40.51,
   "distance": 50,
   "hfov": 19.86
  }
 ],
 "id": "overlay_D51EE4DC_C2A2_E32B_41DC_92F8601EB317",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A, this.camera_C910B251_C535_5EAF_41E3_EB1B7DB6E1C8); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 74.69,
   "hfov": 5.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_1_HS_1_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -76.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DB3A8E69_C262_BFED_41E7_F0B1D8C446B3",
   "yaw": 74.69,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -76.94,
   "distance": 100,
   "hfov": 5.88
  }
 ],
 "id": "overlay_D57F1CF6_C265_9CE7_41D9_E596FFD3C8E6",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23, this.camera_C906525A_C535_5F5D_41DB_051CDF2B1A38); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -148.64,
   "hfov": 13.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0_HS_3_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D49CF316_C262_6527_41D2_1AF4BB8829CD",
   "yaw": -148.64,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.01,
   "distance": 100,
   "hfov": 13.7
  }
 ],
 "id": "overlay_D4611EB3_C262_FF7D_41E5_15A412990C63",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 166.33,
   "hfov": 11.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DB92E014_C265_A33B_41E6_07665C41AD38",
   "yaw": 166.33,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -7.87,
   "distance": 100,
   "hfov": 11.73
  }
 ],
 "id": "overlay_D704C7F1_C262_ACFD_41C8_057DFC26EED6",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D, this.camera_C9AAB29A_C535_5FDD_41DD_714EF739EB86); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -16.63,
   "hfov": 16.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0_HS_3_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DB922014_C265_A33B_41DF_1F2D9C7DD4E3",
   "yaw": -16.63,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -25.73,
   "distance": 100,
   "hfov": 16.44
  }
 ],
 "id": "overlay_D789EAFF_C263_E4E4_41D0_301A56D857ED",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7, this.camera_C932823F_C535_5ED3_41D1_32F959FB841A); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 128,
   "hfov": 24.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DAC13859_C266_632D_41AD_D21DF84A274D",
   "yaw": 128,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -26.57,
   "distance": 50,
   "hfov": 24.72
  }
 ],
 "id": "overlay_D67BE022_C262_A31F_41E3_44BD1D1C9ECC",
 "data": {
  "label": "Arrow 02b Right"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A, this.camera_C920E248_C535_5EBD_41C0_2BA4E2C7B30A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 105.89,
   "hfov": 12.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0_HS_4_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D9291E15_C2A6_9F24_41A4_FEFBD5E4E8B5",
   "yaw": 105.89,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.27,
   "distance": 50,
   "hfov": 12.06
  }
 ],
 "id": "overlay_D58DC39A_C2A6_652F_41D4_1D062C1C9853",
 "data": {
  "label": "Arrow 02c Right-Up"
 }
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_1_HS_2_0.png",
   "width": 1080,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_DB3A2E69_C262_BFED_41DE_63859FE36FB4",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CB9BED0E_C1A2_9D27_41DA_522043F4CA23_0_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_DB333EB8_C2A6_9F6B_41B9_188642F3C6E1",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CB955D77_C1A3_9DE5_41E7_760A976DCDF5_1_HS_2_0.png",
   "width": 925,
   "height": 540,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 5,
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "id": "AnimatedImageResource_DB386E68_C262_BFEB_41E2_2FE9DE3F125E",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_DB389E68_C262_BFEB_41D8_CDC73A74A35E",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_DB393E69_C262_BFED_41E0_D4D5524FFC8F",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_1_HS_2_0.png",
   "width": 925,
   "height": 540,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 5,
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "id": "AnimatedImageResource_DB39CE69_C262_BFED_41DD_F404058E85D8",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CBF7E580_C1A3_ED1B_41D0_669A05FDF12A_0_HS_3_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_D8D53E0E_C2A6_9F24_41DD_D5019D6DFF65",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CB9BE4E3_C1A2_631C_41DC_6B6A80C844A6_1_HS_1_0.png",
   "width": 380,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_DB34DE6A_C262_BFEF_41C3_5775727208FA",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0_HS_1_0.png",
   "width": 1080,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_DA2FD355_C26D_A525_41E7_C2B5575BE044",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CB9BFD02_C1A3_BD1C_41D0_689B400F854D_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_DB95B014_C265_A33B_41CD_D33CC5D33C6F",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_1_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "id": "AnimatedImageResource_DB3BAE6A_C262_BFEF_41E2_C237756B581C",
 "rowCount": 5
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CB99E4CB_C1A3_A32D_41E5_A9C8825EB3E1_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_DB950015_C265_A325_41DE_6F87A0B51662",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_DB347E6A_C262_BFEF_41E2_1291D4F1F76A",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CBE47CE2_C1A3_A31F_4181_4BF6BC4C20A7_0_HS_5_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_D9081EBD_C2BF_9F65_41E6_FCD7C7FDDED1",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_1_HS_1_0.png",
   "width": 380,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_DB3A8E69_C262_BFED_41E7_F0B1D8C446B3",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CBE5450F_C1A2_6D25_41D0_80A838DCAE41_0_HS_3_0.png",
   "width": 1080,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_D49CF316_C262_6527_41D2_1AF4BB8829CD",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_DB92E014_C265_A33B_41E6_07665C41AD38",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CB9B8552_C1A3_AD3C_41E0_9A483FEA1E41_0_HS_3_0.png",
   "width": 1080,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_DB922014_C265_A33B_41DF_1F2D9C7DD4E3",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0_HS_1_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_DAC13859_C266_632D_41AD_D21DF84A274D",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CB99FD1D_C1A2_7D24_41C4_2F636BA27104_0_HS_4_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "id": "AnimatedImageResource_D9291E15_C2A6_9F24_41A4_FEFBD5E4E8B5",
 "rowCount": 6
}],
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "gap": 10,
 "vrPolyfillScale": 0.7,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "scripts": {
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "paddingTop": 0,
 "data": {
  "name": "Player445"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "defaultVRPointer": "laser",
 "downloadEnabled": false,
 "layout": "absolute"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
