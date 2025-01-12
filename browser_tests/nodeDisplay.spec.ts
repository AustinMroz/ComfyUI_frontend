import { expect } from '@playwright/test'
import { comfyPageFixture as test } from './ComfyPage'

// If an input is optional by node definition, it should be shown as
// a hollow circle no matter what shape it was defined in the workflow JSON.
test.describe('Optional input', () => {
  test('No shape specified', async ({ comfyPage }) => {
    await comfyPage.loadWorkflow('optional_input_no_shape')
    await expect(comfyPage.canvas).toHaveScreenshot('optional_input.png')
  })

  test('Wrong shape specified', async ({ comfyPage }) => {
    await comfyPage.loadWorkflow('optional_input_wrong_shape')
    await expect(comfyPage.canvas).toHaveScreenshot('optional_input.png')
  })

  test('Correct shape specified', async ({ comfyPage }) => {
    await comfyPage.loadWorkflow('optional_input_correct_shape')
    await expect(comfyPage.canvas).toHaveScreenshot('optional_input.png')
  })

  test('Force input', async ({ comfyPage }) => {
    await comfyPage.loadWorkflow('force_input')
    await expect(comfyPage.canvas).toHaveScreenshot('force_input.png')
  })
})
