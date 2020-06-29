import newEntityPage from '../objects/newEntityPage'
import newEntityModal from '../objects/newEntityModal'
import { retrieveAll, retrieveLatestEntryByDate } from '../extensions/apiDataRetrieval'

const exampleName = 'Mauricio Giacomello'
const exampleCountry = 'Italy'
const exampleYob = '22/09/1989'
const examplePosition = 'Tech Lead'
const exampleUrl = 'http://giacomello.me'
const exampleRiskText = 'Low'
const exampleRiskNumber = 1

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
    // Act
    newEntityPage.withName(exampleName)
    newEntityPage.withCountry(exampleCountry)
    newEntityPage.withYob(exampleYob)
    newEntityPage.withPosition(examplePosition)
    newEntityPage.withUrl(exampleUrl)
    newEntityPage.withRisk(exampleRiskText)

    newEntityPage.submit()
    newEntityModal.waitForDisplayed()

    // Assert - UI
    expect(newEntityModal.isExisting()).toBe(true)
    expect(newEntityModal.modalText()).toContain(exampleName)

    // Assert - API
    const lastAddedFromAPI = retrieveLatestEntryByDate()
    expect(lastAddedFromAPI.name).toBe(exampleName)
    expect(lastAddedFromAPI.country).toBe(exampleCountry)
    expect(lastAddedFromAPI.yob).toBe(exampleYob)
    expect(lastAddedFromAPI.position).toBe(examplePosition)
    // Not present: expect(lastAddedFromAPI.url).toBe(exampleUrl)
    expect(lastAddedFromAPI.risk).toBe(exampleRiskNumber)
  })
})
