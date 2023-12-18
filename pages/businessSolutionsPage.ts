import { expect, type Locator, type Page } from '@playwright/test'

// Create Business Solutions page class, define web elements and functions
export class BusinessSolutionsPage {
  readonly page: Page
  readonly titleLabel: Locator

  // Result page constructor
  constructor(page: Page) {
    this.page = page
    this.titleLabel = page.locator('h1.resource-title')
  }

  // Function to check the title on the Business Solutions page
  async checkTitle() {
    await expect(this.titleLabel).toHaveText("Microsoft Azure")
  }
}