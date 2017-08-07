var phone;
var back;

//snow variables
var quantity = 100;
var xPosition = [];
var yPosition = [];
var flakeSize = [];
var direction = [];
var minFlakeSize = 1;
var maxFlakeSize = 10;
var snowColor = 255;

function preload() {
  back = loadImage('assets/backdrop.png');
  slope = loadImage('assets/slope.png');
  phone = loadImage('assets/phone.png');
}
function setup() {
  createCanvas(750,1380);
  //createP('Pistenkilometer').position(343,1310);
  slopeKm = createSlider(0,700,700);
  slopeKm.position(320,1350);
  background(255);

  //snow setup
  frameRate(25);
  for(var i = 0; i < quantity; i++) {
    flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
    xPosition[i] = random(0, width);
    yPosition[i] = random(0, height);
    direction[i] = round(random(0, 1));
  }


}

function draw() {
  var km = slopeKm.value();
  background(255);
  image(back,100,280,545,865);
  fill(147,163,187);
  rect(104,275,448,km);
  image(slope,0,0,width,1334);
  fill(255);
  drawSnow();
  image(phone,0,0,width,1334);
  noStroke();
  fill(255);
  rect(0,0,width,10);
  rect(0,height-10,width,10);
  textSize(25);
  textAlign('left');
  fill(147,163,187);
  text('Pistenkilometer: '+ slopeKm.value(),270,1000);
  fill(0);
  textSize(35);
  text('Pistenkilometer',270,1340);


    console.log(km);



}

function drawSnow() {
	for(var i = 0; i < xPosition.length; i++) {
    noStroke();
    ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);

    if(direction[i] == 0) {
      xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    } else {
      xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    }

    yPosition[i] += flakeSize[i] + direction[i];

    if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
      xPosition[i] = random(0, width);
      yPosition[i] = -flakeSize[i];
    }
  }
}
