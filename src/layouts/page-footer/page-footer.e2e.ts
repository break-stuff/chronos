import { newE2EPage } from '@stencil/core/testing';

describe('page-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<page-footer></page-footer>');
    const element = await page.find('page-footer');
    expect(element).toHaveClass('hydrated');
  });
});
