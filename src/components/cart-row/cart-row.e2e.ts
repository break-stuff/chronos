import { newE2EPage } from '@stencil/core/testing';

describe('cart-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<cart-row></cart-row>');
    const element = await page.find('cart-row');
    expect(element).toHaveClass('hydrated');
  });
});
