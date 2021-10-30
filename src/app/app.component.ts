import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("videoElement") videoElement: any;
  video: any;
  image: string;

  isPlaying = false;

  displayControls = true;

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
  }

  start() {
    this.initCamera({ video: true, audio: false });
  }

  pause() {
    this.video.pause();
  }

  toggleControls() {
    this.video.controls = this.displayControls;
    this.displayControls = !this.displayControls;
  }

  resume() {
    this.video.play();
  }

  blob() {
    const canvas = document.createElement("canvas"); // create a canvas
    const ctx = canvas.getContext("2d"); // get its context
    canvas.width = this.video.videoWidth; // set its size to the one of the video
    canvas.height = this.video.videoHeight;
    ctx.drawImage(this.video, 0, 0); // the video

    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "blue";
    ctx.rect(282, 341, 139, 139);
    ctx.stroke();

    var data = canvas.toDataURL("image/jpeg");
    this.image = data;
    console.log(data);

    console.log(ctx);
  }

  sound() {
    this.initCamera({ video: true, audio: true });
  }

  initCamera(config: any) {
    var browser = <any>navigator;

    browser.getUserMedia =
      browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia;

    browser.mediaDevices.getUserMedia(config).then((stream) => {
      this.video.srcObject = stream;
      this.video.play();
    });
  }
}
