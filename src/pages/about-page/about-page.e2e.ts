import { newE2EPage } from '@stencil/core/testing';

describe('about-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<about-page></about-page>');
    const element = await page.find('about-page');
    expect(element).toHaveClass('hydrated');
  });
});
