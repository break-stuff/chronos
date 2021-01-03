import { newE2EPage } from '@stencil/core/testing';

describe('category-gallery', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<category-gallery></category-gallery>');
    const element = await page.find('category-gallery');
    expect(element).toHaveClass('hydrated');
  });
});
