import { ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { screen, fireEvent } from '@testing-library/angular';
import { configureTestSuite, createComponent } from '../../tests/test-helpers';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  configureTestSuite({
    imports: [AppComponent],
  });

  beforeEach(async () => {
    const setup = createComponent(AppComponent);
    component = setup.component;
    fixture = setup.fixture;
  });

  it('should create the app', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it(`should have the 'blog-ui' title`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('blog-ui');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, blog-ui',
    );
  });

  // it('should render counter', async () => {
  //   const element = screen.getByText('Current Count: 0');

  //   expect(true).toBeTruthy();
  // });
});
