import newEntityPage from '../objects/newEntity'

describe('Entity Creation', () => {
  it('Smoke Test', () => {
    newEntityPage.open()
    expect(newEntityPage.isLoaded()).toBe(true)
  })
})
