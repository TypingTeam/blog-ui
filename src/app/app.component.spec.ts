import { AppComponent } from './app.component';
import { screen, render } from '@testing-library/angular';

describe('AppComponent', () => {
  it('should display counter', async () => {
    await render(AppComponent, {
      inputs: {
        counter: 1,
      },
    });

    expect(screen.getByText('Current Count: 1')).toBeVisible();
  });
});
