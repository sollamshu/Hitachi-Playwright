import { test } from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { ResultsPage } from '../pages/resultsPage'

// This test allows the user to enter a search criteria and looking the results in the Results page
test('Verify user can obtain results when performing a search @smoke', async ({ page }) => {
  const homePage = new HomePage(page)
  const resultsPage = new ResultsPage(page)
  await homePage.goTo(process.env.URL) 
  await homePage.search('Azure')

  await resultsPage.checkTitle('Search results for: Azure')
})

// This test allows the user to enter a search criteria with no matching criteria and should not return any results in the Results page
test('Verify user cannot obtain results when performing a search with no matching @smoke', async ({ page }) => {
  const homePage = new HomePage(page)
  const resultsPage = new ResultsPage(page)
  await homePage.goTo(process.env.URL) 
  await homePage.search('Azuure')

  await resultsPage.checkEmptyResults()
})