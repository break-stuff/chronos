import { newE2EPage } from '@stencil/core/testing';

describe('products-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<products-page></products-page>');
    const element = await page.find('products-page');
    expect(element).toHaveClass('hydrated');
  });
});
