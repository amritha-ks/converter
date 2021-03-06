import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  @Input() displayText = '';
  @Input() placehoderText = '';

  constructor() { }

  ngOnInit(): void { }
}
