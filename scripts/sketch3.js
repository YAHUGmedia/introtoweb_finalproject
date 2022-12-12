let vid1, vid2, vid3, vid4;

let hand;

let theta = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    vid1 = createVideo(['videos/stablediff_video_01.mp4']);
    vid1.elt.muted = true;
    vid1.loop();
    vid1.hide();

    vid2 = createVideo(['videos/stablediff_video_02.mp4']);
    vid2.elt.muted = true;
    vid2.loop();
    vid2.hide();

    vid3 = createVideo(['videos/stablediff_video_03.mp4']);
    vid3.elt.muted = true;
    vid3.loop();
    vid3.hide();

    vid4 = createVideo(['videos/stablediff_video_04.mp4']);
    vid4.elt.muted = true;
    vid4.loop();
    vid4.hide();

    hand  = loadModel('models/hand.obj', true);
}

function draw() {
    background(0, 0, 0);

    noStroke();

    push();
        translate(-width / 4, -height / 4, 0);
        rotateX(PI/2);
        rotateY(0);
        rotateZ(theta);
        scale(2);
        texture(vid1);
        model(hand);
    pop();

    push();
        translate(width / 4, -height / 4, 0);
        rotateX(0);
        rotateY(PI/2);
        rotateZ(theta);
        scale(2);
        texture(vid2);
        model(hand);
    pop();

    push();
        translate(-width / 4, height / 4, 0);
        rotateX(0);
        rotateY(PI/-2);
        rotateZ(theta);
        scale(2);
        texture(vid3);
        model(hand);
    pop();

    push();
        translate(width / 4, height / 4, 0);
        rotateX(PI/-2);
        rotateY(0);
        rotateZ(theta);
        scale(2);
        texture(vid4);
        model(hand);
    pop();

    theta += 0.01;
}

// 3D hand model taken from: https://poly.pizza/m/btWmPNVSKUc