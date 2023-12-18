import { test } from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { BusinessSolutionsPage } from '../pages/businessSolutionsPage'

// This test is to cover the navigation functionality, so the user can navigate to other pages, basically it will navigate using the menu and clicking the menu options, this flow only covers entering to Azure page under Business Solutions but it is the same flow with some minor changes to navigate to other pages
test('Verify user can navigate to Azure under Business Solutions @smoke', async ({ page }) => {
  const homePage = new HomePage(page)
  const businessSolutionsPage = new BusinessSolutionsPage(page)
  await homePage.goTo(process.env.URL) 
  await homePage.goToAzure()

  await businessSolutionsPage.checkTitle()
})