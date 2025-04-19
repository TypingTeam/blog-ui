import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

const elementsToCleanup: HTMLElement[] = [];

export function configureTestSuite(config: {
  declarations?: any[];
  imports?: any[];
  providers?: any[];
}) {
  const { declarations = [], imports = [], providers = [] } = config;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        ...imports,
      ],
      declarations: [...declarations],
      providers: [...providers, provideRouter([])],
      teardown: { destroyAfterEach: true },
    }).compileComponents();
  });

  afterAll(() => {
    elementsToCleanup.forEach((element) => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });
    elementsToCleanup.length = 0;
  });
}

export function createComponent<T>(component: new (...args: any[]) => T): {
  fixture: ComponentFixture<T>;
  component: T;
} {
  const fixture = TestBed.createComponent(component);
  const instance = fixture.componentInstance;
  fixture.detectChanges();

  document.body.appendChild(fixture.nativeElement);
  elementsToCleanup.push(fixture.nativeElement);

  return { fixture, component: instance };
}
