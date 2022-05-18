import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { KEYPAD_CONTENT } from 'src/app/constants/keypad.constants';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent implements OnInit {

  @Output() handleClick = new EventEmitter();

  keypadContent = KEYPAD_CONTENT;

  constructor() { }

  ngOnInit(): void { }

  onKeyClick(key: any): void {
    this.handleClick.emit(key);
  }

}
