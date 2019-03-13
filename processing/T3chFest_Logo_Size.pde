import processing.sound.*;

AudioIn input;
Amplitude loudness;
PImage img;
int scale;

void setup() {
  size(1024,640);
  background(0);

  // Create an Audio input and grab the 1st channel
  input = new AudioIn(this, 0);
  
  // Create an Image with T3chFest logo
  img = loadImage("T3chFest.png");

  // Begin capturing the audio input
  input.start();
  // start() activates audio capture so that you can use it as
  // the input to live sound analysis, but it does NOT cause the
  // captured audio to be played back to you. if you also want the
  // microphone input to be played back to you, call
  //    input.play();
  // instead (be careful with your speaker volume, you might produce
  // painful audio feedback. best to first try it out wearing headphones!)

  // Create a new Amplitude analyzer
  loudness = new Amplitude(this);

  // Patch the input to the volume analyzer
  loudness.input(input);
}


void draw() {
  // Adjust the volume of the audio input based on mouse position
  float inputLevel = map(mouseY, 0, height, 1.0, 0.0);
  input.amp(inputLevel);

  // loudness.analyze() return a value between 0 and 1. To adjust
  // the scaling and mapping of an ellipse we scale from 0 to 0.5
  float volume = loudness.analyze();
  int size = int(map(volume, 0, 0.5, 1, 350));
  //println(size);

  background(7, 19, 62);
  
  //image(img, width/2 - img.width * .5, height/2 - img.height * .5, img.width, img.height);
  image(img, width/2 - size * .5, height/2 - size * .5, size, size);

}
