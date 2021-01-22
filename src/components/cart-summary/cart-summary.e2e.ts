import { newE2EPage } from '@stencil/core/testing';

describe('cart-summary', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<cart-summary></cart-summary>');
    const element = await page.find('cart-summary');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
