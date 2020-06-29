import newEntityPage from '../objects/newEntity'
import { retrieveAll } from '../extensions/apiDataRetrieval'

describe('Entity Creation', () => {
  beforeEach(() => {
    newEntityPage.open()
  })

  it('Front-end is up @Smoke', () => {
    // Arrange
    // Act
    // Assert
    expect(newEntityPage.isLoaded()).toBe(true)
  })

  it('Back-end is up @Smoke', () => {
    // Arrange
    // Act
    // Assert
    expect(retrieveAll()).toBeDefined()
  })
})
