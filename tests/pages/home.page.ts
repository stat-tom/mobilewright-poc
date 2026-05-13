import { expect } from '@mobilewright/test';
import type { Device, Screen } from 'mobilewright';

import { BasePage } from './base.page.js';

export class HomePage extends BasePage {
  constructor(
    private readonly device: Device,
    screen: Screen,
    private readonly baseUrl: string,
  ) {
    super(screen);
  }

  async open(): Promise<void> {
    await this.device.goto(this.baseUrl);
    await expect(this.screen.getByText(/Practice Software Testing|Toolshop/i)).toBeVisible({
      timeout: 20_000,
    });
  }

  async openProduct(productName: string): Promise<void> {
    await this.tapVisible(this.screen.getByText(productName));
  }
}
