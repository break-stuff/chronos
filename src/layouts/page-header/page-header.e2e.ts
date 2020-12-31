import { newE2EPage } from '@stencil/core/testing';

describe('page-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<page-header></page-header>');
    const element = await page.find('page-header');
    expect(element).toHaveClass('hydrated');
  });
});
