import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatSnackBarModule,
        MatCardModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should convert number to string', () => {
    component.handleOnClick(1);
    expect(component.displayText).toBe('B');
  });

  it('should convert number to string after pressing `#` key', () => {
    component.handleOnClick(1);
    component.handleOnClick('#');
    expect(component.displayNumber).toBe('1#');
    expect(component.displayText).toBe('B');
  });

  it('should convert number to string when there is number after `#` key', () => {
    component.handleOnClick(1);
    component.handleOnClick('#');
    component.handleOnClick(2);
    expect(component.displayNumber).toBe('1#2');
    expect(component.displayText).toBe('BC');
  });

  it('should remove a number and update text on clicking `<-` ', () => {
    component.handleOnClick('<-');
    expect(component.displayNumber).toBe('');
    expect(component.displayText).toBe('');
  });

  it('should remove a number and update text on clicking `<-` when the display number has more than 1 digit', () => {
    component.displayNumber = '12';
    component.handleOnClick('<-');
    expect(component.displayNumber).toBe('1');
    expect(component.displayText).toBe('B');
  });
});
