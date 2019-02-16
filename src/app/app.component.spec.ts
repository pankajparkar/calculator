import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

let element, fixture

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement
    element = debugElement.nativeElement;
  }));

  // it('should create the app', () => {
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'calculator'`, () => {
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('calculator');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to calculator!');
  // });

  afterEach(() => {
    // fixture.destroy();
    element.remove()
  })
});
