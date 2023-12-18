import { expect, type Locator, type Page } from '@playwright/test'

// Create Home page class, define web elements and functions
export class HomePage {
  readonly page: Page
  readonly searchIcon: Locator
  readonly searchInput: Locator
  readonly businessSolutionsSubMenu: Locator
  readonly azureOption: Locator

  // Home page constructor
  constructor(page: Page) {
    this.page = page
    this.searchIcon = page.locator('#open-global-search')
    this.searchInput = page.locator('input[name="s"]')

    this.businessSolutionsSubMenu = page.locator('button[aria-controls="business-solutions-submenu"]')
    this.azureOption = page.locator(' ul#business-solutions-submenu li.menu-item :text("Azure")')
  }

  // Function to go to url
  async goTo(url: string) {
    await this.page.goto(url)
  }

  // Function to enter search critera
  async goToAzure() {
    await this.businessSolutionsSubMenu.click()
    await this.azureOption.click()
  }

  // Function to enter search critera
  async search(criteria: string) {
    await this.searchIcon.click()
    await this.searchInput.fill(criteria)
    await this.page.keyboard.press('Enter')
  }
}