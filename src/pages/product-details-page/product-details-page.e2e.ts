import { newE2EPage } from '@stencil/core/testing';

describe('product-details-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<product-details-page></product-details-page>');
    const element = await page.find('product-details-page');
    expect(element).toHaveClass('hydrated');
  });
});
