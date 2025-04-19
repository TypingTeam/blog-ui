import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import JasmineDOM from '@testing-library/jasmine-dom';

// beforeEach(() => {
//   jasmine.addMatchers(JasmineDOM);
// });

// afterEach(() => {
//   document.body.innerHTML = '';
// });

try {
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
    { teardown: { destroyAfterEach: true } },
  );
} catch (error) {
  console.warn('angualr test is ready ', error);
}

beforeEach(() => {
  jasmine.addMatchers(JasmineDOM);
});

afterAll(() => {
  getTestBed().resetTestEnvironment();

  Array.from(document.body.children).forEach((child) => {
    if (child.tagName !== 'SCRIPT') {
      document.body.removeChild(child);
    }
  });
});
