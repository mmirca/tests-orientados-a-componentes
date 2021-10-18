// import { newE2EPage } from '@stencil/core/testing';
import { MyComponentPage } from './MyComponentPage';

describe('my-component', () => {
  it('should set "30" as input value when the update button is clicked', async () => {
    const page = new MyComponentPage();
    await page.navigateTo();

    const $updateCounterButton = await page.updateCounterButton;
    await $updateCounterButton.click();

    const $myComponent = await page.myComponent;

    expect($myComponent.getAttribute('count')).toBe('30');
  });
});
