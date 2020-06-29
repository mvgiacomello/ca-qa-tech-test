import newEntityPage from '../objects/newEntityPage'
import newEntityModal from '../objects/newEntityModal'
import { retrieveAll, retrieveLatestEntryByDate } from '../extensions/apiDataRetrieval'

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

  it('Creates an entity - Happy path', () => {
    // Arrange
    const name = 'Mauricio Giacomello'
    const country = 'England'
    const yob = '22/09/1989'
    const position = 'Tester'
    const url = 'http://giacomello.me'
    const riskText = 'Medium'
    const riskNumber = 2

    // Act
    newEntityPage.withName(name)
    newEntityPage.withCountry(country)
    newEntityPage.withYob(yob)
    newEntityPage.withPosition(position)
    newEntityPage.withUrl(url)
    newEntityPage.withRisk(riskText)

    newEntityPage.submit()
    newEntityModal.waitForDisplayed()

    // Assert - UI
    expect(newEntityModal.isExisting()).toBe(true)
    expect(newEntityModal.modalText()).toContain(name)

    // Assert - API
    const lastAddedFromAPI = retrieveLatestEntryByDate()
    expect(lastAddedFromAPI.name).toBe(name)
    expect(lastAddedFromAPI.country).toBe(country)
    expect(lastAddedFromAPI.yob).toBe(yob)
    expect(lastAddedFromAPI.position).toBe(position)
    // Not present: expect(lastAddedFromAPI.url).toBe(url)
    expect(lastAddedFromAPI.risk).toBe(riskNumber)
  })
})
