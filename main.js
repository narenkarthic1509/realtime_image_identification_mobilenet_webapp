function preload(){
  rsltimg = loadImage('remote.jpg');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();

  classifier = ml5.imageClassifier('MobileNet',modelLoaded);
}

function modelLoaded(){
  console.log('model has been loaded');
}

function draw(){
  image(rsltimg,0,0,300,300);
  classifier.classify(rsltimg,gotResult);
}

function gotResult(error,results){

  if(error){
    console.log(error);
  }
  else{
    console.log(results);
    document.getElementById('result_object_name').innerHTML = results[0].label;
    document.getElementById('result_object_accuracy').innerHTML = results[0].confidence.toFixed(3);
  }

}

function take_Snapshot(){
  save('naren.png');
}



