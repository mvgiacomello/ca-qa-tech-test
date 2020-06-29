class NewEntityModal {
  get modal () {
    return $('.modal-content')
  }

  get text () {
    return $('.modal-body')
  }

  get back () {
    return $('button*=Back')
  }

  isExisting () {
    return this.modal.isExisting()
  }

  waitForDisplayed () {
    this.modal.waitForDisplayed()
  }

  waitForNotDisplayed () {
    this.modal.waitForDisplayed({ reverse: true })
  }

  modalText () {
    return this.text.getText()
  }

  dismiss () {
    this.back.click()
    this.waitForNotDisplayed()
  }
}

export default new NewEntityModal()
