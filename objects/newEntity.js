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
