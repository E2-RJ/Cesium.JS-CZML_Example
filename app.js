// Access token, found at: https://cesium.com/ion/tokens.
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNzMyNjg5Zi00ZTI5LTRmYWEtOTE3Mi1kOTk3Y2RjYjY1YWEiLCJpZCI6NzQ1MjEsImlhdCI6MTYzNzgyMzU4N30.JFkVpFHpCeYuhC4KDr5_Or8PZArO_v8ed9nuP2j1xUU';

const viewer = new Cesium.Viewer('cesiumContainer', {
    requestRenderMode: true, // Only render on request from entity, reduces CPU usage
    maximumRenderTimeChange: Infinity,
    //terrainProvider: Cesium.createWorldTerrain()
  });
  
  // Add Cesium OSM Buildings, a global 3D buildings layer.
  
  //const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());
  
  var scene = viewer.scene;
  scene.debugShowFramesPerSecond = false; // Shows FPS counter overlay, mainly for debugging purposes
  
  // Clear scene and set default view.
  var handler;
  function resetScene() {
    viewer.trackedEntity = undefined;
    viewer.dataSources.removeAll();
    viewer.entities.removeAll();
    viewer.scene.primitives.remove(tileset);
    viewer.clock.shouldAnimate = false;
    handler = handler && handler.destroy();
    scene.skyBox.show = true;
    scene.camera.flyHome(0.0);
    scene.requestRender();
    viewModel.showTimeOptions = false;
    viewModel.timeChangeEnabled = false;
    viewModel.maximumRenderTimeChange = 0;
  }

/*
var czml = [
    {
      id: "document",
      name: "CZML Points Open Eye",
      version: "1.0",
    },
    {
      "description": "\n\t\t<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\">\n\t\t\t<tbody>\n\t\t\t\t<tr><th>Project</th><td>Liverpool Air Quality Visualisation</td></tr>\n\t\t\t\t<tr><th>Description</th><td>This project links to a data visualisation of air pollution over the city of Liverpool around the 5th of November 2021</td></tr>\n\t\t\t\t<tr><th></tr>\n\t\t\t\t<tr><th>Date</th><td>2021/10/05</td></tr>",
      id: "Liverpool Air",
      name: "point",
      position: {
           cartographicDegrees:[
              -2.9950342, 
              53.403815,
              70
           ],
      },
      point: {
        color: {
          rgba: [255, 255, 255, 200],
        },
        outlineColor: {
          rgba: [24, 117, 202, 255],
        },
        outlineWidth: 2,
        pixelSize: 5,
      },
    },
    {
        id: "Hacking Ecology Spain",
        name: "point",
        position: {
             cartographicDegrees:[
               2.1695163,
               41.375283, 
               70
             ],
        },
        point: {
          color: {
            rgba: [255, 255, 255, 200],
          },
          outlineColor: {
            rgba: [24, 117, 202, 255],
          },
          outlineWidth: 2,
          pixelSize: 5,
        },
      },
    {
        id: "Tanzania Ilota",
        name: "point",
        position: {
             cartographicDegrees:[        
                33.262276,
                -8.896396,
                70
             ],
        },
        point: {
          color: {
            rgba: [255, 255, 255, 200],
          },
          outlineColor: {
            rgba: [24, 117, 202, 255],
          },
          outlineWidth: 2,
          pixelSize: 5,
        },
      },
     {
        id: "Liverpool GPS",
        name: "point",
        position: {
             cartographicDegrees:[
               -2.9950342, 
               53.443815,
               70
             ],
        },
        point: {
          color: {
            rgba: [255, 255, 255, 200],
          },
          outlineColor: {
            rgba: [24, 117, 202, 255],
          },
          outlineWidth: 2,
          pixelSize: 5,
        },
      },
     {
        id: "9 Earths Qatar",
        name: "point",
        position: {
             cartographicDegrees:[
                51.37191,
                25.2842534,
                70
             ],
        },
        point: {
          color: {
            rgba: [255, 255, 255, 200],
          },
          outlineColor: {
            rgba: [24, 117, 202, 255],
          },
          outlineWidth: 2,
          pixelSize: 5,
        },
      },
    
  ];
  
*/


var dataSourcePromise = Cesium.CzmlDataSource.load('./projects.czml');
viewer.dataSources.add(dataSourcePromise);
viewer.zoomTo(dataSourcePromise);


/*
// This works
viewer.infoBox.frame.removeAttribute("sandbox");

// So does this if you want to limit other things but allow scripts
//viewer.infoBox.frame.setAttribute("sandbox", "allow-same-origin allow-popups allow-forms allow-scripts");

// In both cases, you need to do this to force a reload for the change to take affect.
viewer.infoBox.frame.src = "about:blank";

viewer.selectedEntity = new Cesium.Entity({
  id: 'YouTube video',
  description: '<div><img width="50%" style="float:left; margin: 0 1em 1em 0;"src="./MbaliziHospital.jpg"/>\r<p>\<div><b>About Mbalizi Hospital</b><br></div><div> The Mbalizi Hospital is situated 20km east of Mbeya, one of the largest \ncities in Tanzania, in southwestern highlands. It was opened as a \nmission hospital from the Mbalizi Evangelistic Church (MEC) beginning of\n 2007 because the previous smaller hospital was always overcrowded. Due \nto denoted money from Switzerland and most of the work being done by own\n people a modern, well equipped hospital with initially 200 beds could \nbe established. At the end of 2007 the hospital became a \nDistrict-Designated Hospital (DDH) and is now running as collaboration \nbetween the Tanzania Evangelistic Church (TEC) and the Ministry of \nHealth and Social Welfare (MoHSW) of Tanzania.<br></div><div> Over the years the patient number has increased from less 100 inpatients\n up to 200 inpatients nowadays. So the bed capacity has been increased \nto 240 beds.<br></div></div>'
}); 
  */
