// Start the app
require( ['detector', 'app', 'container'], function ( Detector, app, container ) {
  if ( !!! Detector.webgl ) {
    Detector.addGetWebGLMessage();
    //TODO: container.innerHTML = "";
  }

  // Initialize our app and start the animation loop (animate is expected to call itself)
  app.init();
  app.render();
} );
