import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  introVideoSource : string = "./assets/videos/introVideo.mp4";
  currentIAmText : number = 0;
  iAmText: Array<string> = ['Pranshu Kumar','a Software Developer', 'a Trader', 'a Photographer'];
  typewriter_text: string;
  typewriter_display: string = "";

  constructor() { }

  ngOnInit(): void {
    this.typewriter_text = this.iAmText[0];
    this.typingCallback(this);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async typingCallback(that) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 100, that);
    } else {
      await that.sleep(2000);
      that.typewriter_display = "";
      that.currentIAmText = (that.currentIAmText+1) % 4
      that.typewriter_text = that.iAmText[that.currentIAmText];
      setTimeout(that.typingCallback, 100, that);
    }
  }
}
