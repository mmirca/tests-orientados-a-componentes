// import { newE2EPage } from '@stencil/core/testing';
import { MyComponentPage } from './MyComponentPage';

describe('my-component', () => {
  it('should set "30" as input value when the update button is clicked', async () => {
    const page = new MyComponentPage();
    await page.navigateTo();

    const $updateCounterButton = await page.updateCounterButton;
    await $updateCounterButton.click();

    const inputValue = await page.inputValue;

    expect(inputValue).toBe('30');
  });
});
