import { newE2EPage } from '@stencil/core/testing';

describe('checkout-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<checkout-page></checkout-page>');
    const element = await page.find('checkout-page');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
