class NewEntity {
  get path () {
    return '/'
  }

  get formTitleText () {
    return 'New Entity'
  }

  get application () {
    return $('.App container')
  }

  get formTitle () {
    return $('h2')
  }

  get name () {
    return $('#fullName')
  }

  get country () {
    return $('#country')
  }

  get yob () {
    return $('[name="yob"]')
  }

  get position () {
    return $('#position')
  }

  get url () {
    return $('#url')
  }

  get risk () {
    return $('#risk')
  }

  get save () {
    return $('button*=Save')
  }

  open () {
    browser.url(this.path)
  }

  isLoaded () {
    return this.formTitle.waitForDisplayed() && this.formTitle.waitForDisplayed()
  }

  showsFormTitle () {
    return this.formTitle.getText().includes(this.formTitleText)
  }

  withName (name) {
    this.name.setValue(name)
  }

  withCountry (country) {
    this.country.setValue(country)
  }

  withYob (yob) {
    this.yob.setValue(yob)
  }

  withPosition (position) {
    this.position.setValue(position)
  }

  withUrl (url) {
    this.url.setValue(url)
  }

  withRisk (risk) {
    this.risk.setValue(risk)
  }

  submit () {
    this.save.click()
  }
}

export default new NewEntity()
