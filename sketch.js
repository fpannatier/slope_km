var phone;
var back;

function preload() {
  back = loadImage('assets/backdrop.png');
  slope = loadImage('assets/slope.png');
}
function setup() {
  createCanvas(750,1334);
  createP('Pistenkilometer').position(343,1310);
  slopeKm = createSlider(0,700,700);
  slopeKm.position(320,1350);
  background(255);

}

function draw() {
  var km = slopeKm.value();
  background(255);
  image(back,100,280,545,865);
  fill(147,163,187);
  rect(104,275,448,km);
  image(slope,0,0,width,height);
  noStroke();
  fill(255);
  rect(0,0,width,10);
  rect(0,height-10,width,10);


    console.log(km);



}
