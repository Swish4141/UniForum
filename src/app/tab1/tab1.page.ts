import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  posts = [];
  segment = 'home';
  opts = {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesOffsetBefore: 0
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://raw.githubusercontent.com/Swish4141/UniForum/master/tweets.json').subscribe((data: any) => {
      console.log('tweets: ', data.tweets);
      this.posts = data.tweets;
    });
  }
}
