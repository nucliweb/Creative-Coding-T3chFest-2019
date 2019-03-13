// Initialize Firebase
var config = {
  apiKey: "AIzaSyCO3AL2IFMdC8mYY366K7vTnh70GUMdpEM",
  authDomain: "creative-coding-t3chfest.firebaseapp.com",
  databaseURL: "https://creative-coding-t3chfest.firebaseio.com",
  projectId: "creative-coding-t3chfest",
  storageBucket: "creative-coding-t3chfest.appspot.com",
  messagingSenderId: "841990479653"
};
firebase.initializeApp(config);

let database = firebase.database();
let ref = database.ref('orbital');


// GUI Controls
let opt = {
    speed: 65,
    scale: 1,
    jitterRadius: 0,
    jitterHue: 0,
    clearAlpha: 10,
    toggleOrbitals: true,
    orbitalAlpha: 100,
    toggleLight: true,      
    lightAlpha: 5,
  };

ref.child('speed').on('value', (ss) => opt.speed = ss.val());
ref.child('scale').on('value', (ss) => opt.scale = ss.val());
ref.child('jitterRadius').on('value', (ss) => opt.jitterRadius = ss.val());
ref.child('jitterHue').on('value', (ss) => opt.jitterHue = ss.val());
ref.child('clearAlpha').on('value', (ss) => opt.clearAlpha = ss.val());
ref.child('toggleOrbitals').on('value', (ss) => opt.toggleOrbitals = ss.val());
ref.child('orbitalAlpha').on('value', (ss) => opt.orbitalAlpha = ss.val());
ref.child('toggleLight').on('value', (ss) => opt.toggleLight = ss.val());
ref.child('lightAlpha').on('value', (ss) => opt.lightAlpha = ss.val());

gui = new dat.GUI({
  autoPlace: false,
  width: 340
})

// speed -----------
gui.add(opt, 'speed')
  .min(-300).max(300)
  .step(1)
  .name('Speed')
  .listen()
  .onChange(() => ref.child('speed').set(gui.__controllers[0].object.speed));

// scale -----------
gui.add( opt, 'scale' )
  .min( 0.5 )
  .max( 5 )
  .step( 0.001 )
  .name( 'Scale' )
  .listen()
  .onChange(() => ref.child('scale').set(gui.__controllers[0].object.scale));

// jitterRadius -----------
gui.add( opt, 'jitterRadius' )
  .min( 0 )
  .max( 5 )
  .step( 0.001 )
  .name( 'Radius Jitter' )
  .listen()
  .onChange(() => ref.child('jitterRadius').set(gui.__controllers[0].object.jitterRadius));

// jitterHue -----------
gui.add( opt, 'jitterHue' )
  .min( 0 )
  .max( 90 )
  .step( 1 )
  .name( 'Hue Jitter' )
  .listen()
  .onChange(() => ref.child('jitterHue').set(gui.__controllers[0].object.jitterHue));

// clearAlpha -----------
gui.add( opt, 'clearAlpha' )
  .min( 0 )
  .max( 100 )
  .step( 1 )
  .name( 'Clear Alpha' )
  .listen()
  .onChange(() => ref.child('clearAlpha').set(gui.__controllers[0].object.clearAlpha));

// toggleOrbitals -----------
gui.add(opt, 'toggleOrbitals')
  .name('Toggle Orbitals')
  .listen()
  .onChange(() => ref.child('toggleOrbitals').set(gui.__controllers[0].object.toggleOrbitals));

// orbitalAlpha -----------
gui.add( opt, 'orbitalAlpha' )
  .min( 0 )
  .max( 100 )
  .step( 1 )
  .name( 'Orbital Alpha' )
  .listen()
  .onChange(() => ref.child('orbitalAlpha').set(gui.__controllers[0].object.orbitalAlpha));

// toggleLight -----------
gui.add( opt, 'toggleLight' )
  .name( 'Toggle Light' )
  .listen()
  .onChange(() => ref.child('toggleLight').set(gui.__controllers[0].object.toggleLight));

// lightAlpha -----------
gui.add( opt, 'lightAlpha' )
  .min( 0 )
  .max( 100 )
  .step( 1 )
  .name('Light Alpha')
  .listen()
  .onChange(() => ref.child('lightAlpha').set(gui.__controllers[0].object.lightAlpha));

customContainer = document.getElementById( 'gui' );
customContainer.appendChild(gui.domElement);
  
document.onselectstart = function(){
  return false;
};
