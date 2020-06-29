import newEntityPage from '../objects/newEntityPage'
import newEntityModal from '../objects/newEntityModal'
import { retrieveAll, retrieveLatestEntryByDate } from '../extensions/apiDataRetrieval'

// Some valid example values
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

  it('Creates an entity - Happy path @Smoke', () => {
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
    expect(lastAddedFromAPI.risk).toBe(exampleRiskNumber)
  })

  it('Creates an entity with invalid full name', () => {
    // Arrange
    newEntityPage.withCountry(exampleCountry)
    newEntityPage.withYob(exampleYob)
    newEntityPage.withPosition(examplePosition)
    newEntityPage.withUrl(exampleUrl)
    newEntityPage.withRisk(exampleRiskText)

    // Act
    newEntityPage.withName('-1 Invalid * Name')
    newEntityPage.submit()

    // Assert
    expect(newEntityModal.isExisting()).toBe(false)
  })

  it('Creates an entity with missing full name', () => {
    // Arrange
    newEntityPage.withCountry(exampleCountry)
    newEntityPage.withYob(exampleYob)
    newEntityPage.withPosition(examplePosition)
    newEntityPage.withUrl(exampleUrl)
    newEntityPage.withRisk(exampleRiskText)

    // Act
    newEntityPage.submit()

    // Assert
    expect(newEntityModal.isExisting()).toBe(false)
  })

  it('Creates an entity with invalid country', () => {
    // Arrange
    newEntityPage.withName(exampleName)
    newEntityPage.withYob(exampleYob)
    newEntityPage.withPosition(examplePosition)
    newEntityPage.withUrl(exampleUrl)
    newEntityPage.withRisk(exampleRiskText)

    // Act
    newEntityPage.withCountry('Wonderland')
    newEntityPage.submit()

    // Assert
    expect(newEntityModal.isExisting()).toBe(false)
  })

  it('Creates an entity with missing country', () => {
    // Arrange
    newEntityPage.withName(exampleName)
    newEntityPage.withYob(exampleYob)
    newEntityPage.withPosition(examplePosition)
    newEntityPage.withUrl(exampleUrl)
    newEntityPage.withRisk(exampleRiskText)

    // Act
    newEntityPage.submit()

    // Assert
    expect(newEntityModal.isExisting()).toBe(false)
  })

  it('Creates an entity with invalid year of birth', () => {
    // Arrange
    newEntityPage.withName(exampleName)
    newEntityPage.withCountry(exampleCountry)
    newEntityPage.withPosition(examplePosition)
    newEntityPage.withUrl(exampleUrl)
    newEntityPage.withRisk(exampleRiskText)

    // Act
    newEntityPage.withYob('40/13/1989')
    newEntityPage.submit()

    // Assert
    expect(newEntityModal.isExisting()).toBe(false)
  })

  it('Creates an entity with future year of birth', () => {
    // Arrange
    newEntityPage.withName(exampleName)
    newEntityPage.withCountry(exampleCountry)
    newEntityPage.withPosition(examplePosition)
    newEntityPage.withUrl(exampleUrl)
    newEntityPage.withRisk(exampleRiskText)

    // Act
    newEntityPage.withYob('22/09/2030')
    newEntityPage.submit()

    // Assert
    expect(newEntityModal.isExisting()).toBe(false)
  })

  it('Creates an entity with missing year of birth', () => {
    // Arrange
    newEntityPage.withName(exampleName)
    newEntityPage.withCountry(exampleCountry)
    newEntityPage.withPosition(examplePosition)
    newEntityPage.withUrl(exampleUrl)
    newEntityPage.withRisk(exampleRiskText)

    // Act
    newEntityPage.submit()

    // Assert
    expect(newEntityModal.isExisting()).toBe(false)
  })

  it('Creates an entity with missing position', () => {
    // Arrange
    newEntityPage.withName(exampleName)
    newEntityPage.withCountry(exampleCountry)
    newEntityPage.withYob(exampleYob)
    newEntityPage.withUrl(exampleUrl)
    newEntityPage.withRisk(exampleRiskText)

    // Act
    newEntityPage.submit()

    // Assert
    expect(newEntityModal.isExisting()).toBe(false)
  })

  it('Creates an entity with invalid url', () => {
    // Arrange
    newEntityPage.withName(exampleName)
    newEntityPage.withCountry(exampleCountry)
    newEntityPage.withYob(exampleYob)
    newEntityPage.withPosition(examplePosition)
    newEntityPage.withRisk(exampleRiskText)

    // Act
    newEntityPage.withUrl('potato')
    newEntityPage.submit()

    // Assert
    expect(newEntityModal.isExisting()).toBe(false)
  })

  it('Creates an entity with missing url', () => {
    // Arrange
    newEntityPage.withName(exampleName)
    newEntityPage.withCountry(exampleCountry)
    newEntityPage.withYob(exampleYob)
    newEntityPage.withPosition(examplePosition)
    newEntityPage.withRisk(exampleRiskText)

    // Act
    newEntityPage.submit()

    // Assert
    expect(newEntityModal.isExisting()).toBe(false)
  })

  it('Creates an entity with risk low', () => {
    // Arrange
    const risk = 'Low'
    newEntityPage.withName(exampleName)
    newEntityPage.withCountry(exampleCountry)
    newEntityPage.withYob(exampleYob)
    newEntityPage.withPosition(examplePosition)
    newEntityPage.withUrl(exampleUrl)

    // Act
    newEntityPage.withRisk(risk)
    newEntityPage.submit()
    newEntityModal.waitForNotDisplayed()

    // Assert
    expect(newEntityModal.isExisting()).toBe(true)
    expect(retrieveLatestEntryByDate().risk).toBe(risk)
  })

  it('Creates an entity with risk medium', () => {
    // Arrange
    const risk = 'Medium'
    newEntityPage.withName(exampleName)
    newEntityPage.withCountry(exampleCountry)
    newEntityPage.withYob(exampleYob)
    newEntityPage.withPosition(examplePosition)
    newEntityPage.withUrl(exampleUrl)

    // Act
    newEntityPage.withRisk(risk)
    newEntityPage.submit()
    newEntityModal.waitForNotDisplayed()

    // Assert
    expect(newEntityModal.isExisting()).toBe(true)
    expect(retrieveLatestEntryByDate().risk).toBe(risk)
  })

  it('Creates an entity with risk high', () => {
    // Arrange
    const risk = 'High'
    newEntityPage.withName(exampleName)
    newEntityPage.withCountry(exampleCountry)
    newEntityPage.withYob(exampleYob)
    newEntityPage.withPosition(examplePosition)
    newEntityPage.withUrl(exampleUrl)

    // Act
    newEntityPage.withRisk(risk)
    newEntityPage.submit()
    newEntityModal.waitForNotDisplayed()

    // Assert
    expect(newEntityModal.isExisting()).toBe(true)
    expect(retrieveLatestEntryByDate().risk).toBe(risk)
  })

  it('Creates an entity with risk huge', () => {
    // Arrange
    const risk = 'HUGE'
    newEntityPage.withName(exampleName)
    newEntityPage.withCountry(exampleCountry)
    newEntityPage.withYob(exampleYob)
    newEntityPage.withPosition(examplePosition)
    newEntityPage.withUrl(exampleUrl)

    // Act
    newEntityPage.withRisk(risk)
    newEntityPage.submit()
    newEntityModal.waitForNotDisplayed()

    // Assert
    expect(newEntityModal.isExisting()).toBe(true)
    expect(retrieveLatestEntryByDate().risk).toBe(risk)
  })

  it('Confirmation modal can be dismissed', () => {
    // Arrange
    newEntityPage.withName(exampleName)
    newEntityPage.withCountry(exampleCountry)
    newEntityPage.withYob(exampleYob)
    newEntityPage.withPosition(examplePosition)
    newEntityPage.withUrl(exampleUrl)
    newEntityPage.withRisk(exampleRiskText)
    newEntityPage.submit()
    newEntityModal.waitForDisplayed()

    // Act
    newEntityModal.dismiss()
    newEntityModal.waitForNotDisplayed()

    // Assert
    expect(newEntityModal.isDisplayed()).toBe(false)
  })
})
