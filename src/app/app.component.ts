import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  displayNumber = '';
  displayText = '';

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  /**
   * converts number to string
   */
  private converterNumber(number: number): string {
    return String.fromCharCode(((number % 26) % 65) + 65);
  }

  /**
   * updates display text
   */
  private updateDisplayText(): void {
    const numberList = this.displayNumber.split('#').filter(val => val);
    const numberListLen = numberList.length;

    this.showNotification(numberList[numberListLen - 1])
    if (numberListLen > 1) {
      if (this.displayText.length === numberListLen) {
        this.displayText = this.displayText.slice(0, -1)
      } else if (this.displayText.length > numberListLen) {
        this.displayText = this.displayText.slice(0, -1)
        return;
      }
      this.displayText = this.displayText + this.converterNumber(+numberList[numberListLen - 1]);
    } else {
      this.displayText = this.converterNumber(+numberList[0]);
    }
  }

  /**
   * shows notification when clicked on a value
   */
  private showNotification(value: string): void {
    const notificationText = `You typed ${value}`;
    this.snackBar.open(notificationText, '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000
    });
  }

  /**
   * triggers on click of keys
   */
  handleOnClick(event: any): void {
    if (event === '<-') {
      this.displayNumber = this.displayNumber.slice(0, -1);
      if (this.displayNumber.length === 0) {
        this.displayText = '';
      } else {
        this.updateDisplayText();
      }
    } else {
      this.displayNumber = this.displayNumber + event;
      if (event !== '#') {
        this.updateDisplayText();
      }
    }

  }
}

