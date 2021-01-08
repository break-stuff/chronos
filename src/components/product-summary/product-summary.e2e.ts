import { newE2EPage } from '@stencil/core/testing';

describe('product-summary', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<product-summary></product-summary>');
    const element = await page.find('product-summary');
    expect(element).toHaveClass('hydrated');
  });
});
