import { expect } from '@mobilewright/test';
import type { Screen } from 'mobilewright';

export class HeaderComponent {
  constructor(private readonly screen: Screen) {}

  async expectCartCount(quantity: number): Promise<void> {
    await expect(this.screen.getByText(String(quantity))).toBeVisible();
  }

  async openCart(): Promise<void> {
    const cartLink = this.screen.getByRole('link', { name: /cart|shopping cart/i });

    await cartLink.scrollIntoViewIfNeeded();
    await cartLink.tap();
  }
}
