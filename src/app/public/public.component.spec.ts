import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PublicComponent } from './public.component';
describe('PublicComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PublicComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(PublicComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'red-gate-farm'`, async(() => {
    const fixture = TestBed.createComponent(PublicComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('red-gate-farm');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(PublicComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to red-gate-farm!');
  }));
});
