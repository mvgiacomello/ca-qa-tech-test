import newEntityPage from '../pages/newEntity'

describe('Entity Creation', () => {
  it('Smoke Test', () => {
    newEntityPage.open()
    expect(newEntityPage.isLoaded()).toBe(true)
  })
})
