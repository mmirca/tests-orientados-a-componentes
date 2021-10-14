import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

export class MyComponentPage {
  public page: Promise<E2EPage>;

  get updateCounterButton(): Promise<E2EElement> {
    return this.getElement('#update-count-button');
  }

  get inputValue(): Promise<string> {
    return this.page.then(page => {
      return page.$eval('#counter', counter => {
        const $input = counter.shadowRoot.querySelector('input');
        return $input.value;
      });
    });
  }

  async navigateTo(): Promise<E2EPage> {
    this.page = newE2EPage({ url: '/index.html' }).then(
      page => {
        page.waitForChanges();
        return Promise.resolve(page);
      }
    );
    return this.page;
  }

  getElement(query: string): Promise<E2EElement> {
    return this.page.then(page =>
      page.find(`[data-e2e="demo"] ${query}`)
    );
  }
}
