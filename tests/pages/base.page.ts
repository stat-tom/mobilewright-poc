import type { Locator, Screen } from 'mobilewright';

export abstract class BasePage {
  protected constructor(protected readonly screen: Screen) {}

  protected async tapVisible(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
    await locator.tap();
  }
}
