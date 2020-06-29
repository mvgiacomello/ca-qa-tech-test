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

  get fullName () {
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

  get sourceUrl () {
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
    return (
      this.formTitle.waitForDisplayed() && this.formTitle.waitForDisplayed()
    )
  }

  showsFormTitle () {
    return this.formTitle.getText().includes(this.formTitleText)
  }
}

export default new NewEntity()
