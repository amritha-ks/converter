import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { KeypadComponent } from './keypad.component';

fdescribe('KeypadComponent', () => {
  let component: KeypadComponent;
  let fixture: ComponentFixture<KeypadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeypadComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeypadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleOnClick function on keypad click', fakeAsync(() => {
    spyOn(component, 'onKeyClick');
    let card = fixture.debugElement.nativeElement.querySelector('mat-card');
    card.click();
    tick();
    expect(component.onKeyClick).toHaveBeenCalledWith(1);
  }));

  it('should emit value on key click', fakeAsync(() => {
    spyOn(component.handleClick, 'emit');
    let card = fixture.debugElement.nativeElement.querySelector('mat-card');
    card.click();
    tick();
    expect(component.handleClick.emit).toHaveBeenCalledWith(1);
  }));

});
