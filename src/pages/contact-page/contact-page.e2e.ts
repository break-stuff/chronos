import { newE2EPage } from '@stencil/core/testing';

describe('contact-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<contact-page></contact-page>');
    const element = await page.find('contact-page');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
