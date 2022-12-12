let vid1, vid2, vid3, vid4;

let theta = 0;
let spin = 0;

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
}

function draw() {
    background(0, 0, 0);

    orbitControl();

    let dx = mouseX - width/2;
    let dy = mouseY - height/2;
    let v = createVector(dx, dy, 0)

    ambientLight(255, 255, 255, v);
    directionalLight(255, 255, 255, v);
    v.div(100);

    push();
        rotateX(0);
        rotateY(spin);
        rotateZ(0);
        translate(0, 0, 0);
        texture(vid4);
        sphere(200, 50, 50, 50);
    pop();

    push();
        rotateX(0);
        rotateY(theta);
        rotateZ(0)
        translate(650, 0, 0);
        texture(vid3);
        sphere(100, 50, 50, 50);

        push();
            rotateX(0);
            rotateY(theta * 0.5);
            rotateZ(0);
            translate(200, 0, 0);
            texture(vid2);
            sphere(75, 50, 50, 50);
        pop();

        push();
            rotateX(0);
            rotateY(-theta * 2);
            rotateZ(0)
            translate(350, 0, 0);
            texture(vid2);
            sphere(50, 50, 50, 50);
        pop();
    pop();

    theta += 0.02;
    spin  -= 0.01;
}

//based on code found here: http://learningprocessing.com/examples/chp14/example-14-16-solar-system