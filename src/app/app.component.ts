import { HttpClient } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { Observable } from "rxjs";

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
  intervalOn = false;

  endpoint = "https://icufunctions.azurewebsites.net/api/analyse/image";
  ocrResult = "";
  timedSub: any;
  faceOcrResult: string;

  current_max_data = 1;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
    this.start();
  }

  start() {
    this.initCamera({ video: true, audio: false });
  }

  pause() {
    this.video.pause();
  }

  startInterval() {
    this.intervalOn = true;
    console.log("activating automated capturing...");
    this.timedSub = Observable.interval(2000).subscribe((val) => {
      this.blob();
    });
  }

  stopInterval() {
    this.intervalOn = false;
    console.log("stopping automated capturing...");
    this.timedSub.unsubscribe();
  }

  toggleControls() {
    this.video.controls = this.displayControls;
    this.displayControls = !this.displayControls;
  }

  resume() {
    this.video.play();
  }

  blob() {
    console.log("snap");
    const canvas = document.createElement("canvas"); // create a canvas
    const ctx = canvas.getContext("2d"); // get its context
    canvas.width = this.video.videoWidth; // set its size to the one of the video
    canvas.height = this.video.videoHeight;
    ctx.drawImage(this.video, 0, 0); // the video

    // ctx.beginPath();
    // ctx.lineWidth = 10;
    // ctx.strokeStyle = "blue";
    // ctx.rect(282, 341, 139, 139);
    // ctx.stroke();

    var data = canvas.toDataURL("image/jpeg");
    this.image = data;
    this.uploadImage(data);
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

  private uploadImage(blob: string): void {
    const cleanedBlob = blob.replace("data:image/jpeg;base64,", "");
    const result = this.httpClient
      .post<any>(this.endpoint, cleanedBlob)
      .subscribe((result) => this.bindResults(result));
  }

  private bindResults(results: any) {
    this.ocrResult = results;
    this.faceOcrResult = this.ocrResult[0];
    console.log(this.faceOcrResult);
  }
}
