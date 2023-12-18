import { expect, type Locator, type Page } from '@playwright/test'

// Create Results page class, define web elements and functions
export class ResultsPage {
  readonly page: Page
  readonly titleLabel: Locator

  // Result page constructor
  constructor(page: Page) {
    this.page = page
    this.titleLabel = page.locator('h4')
  }

  // Function to check the title on the Results page
  async checkTitle(title: string) {
    await expect(this.titleLabel).toHaveText(title)
  }

  // Function to check empty results on the Results page
  async checkEmptyResults() {
    await expect(this.titleLabel).toHaveText("Sorry, your search didn't return any results.")
  }
}