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

  isPresent () {
    return (
      this.modal.isPresent()
    )
  }

  modalText () {
    return this.text.getText()
  }
}

export default new NewEntityModal()
