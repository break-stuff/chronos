import { newE2EPage } from '@stencil/core/testing';

describe('cart-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<cart-page></cart-page>');
    const element = await page.find('cart-page');
    expect(element).toHaveClass('hydrated');
  });
});
