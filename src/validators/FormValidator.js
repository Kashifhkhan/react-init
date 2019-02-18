class FormValidator {
  get _nameRegex() {
    return /^[^\s][a-zA-Z0-9-_\s][^\s]*$/;
  }

  Empty(value) {
    if (!value) {
      return true;
    } else {
      return false;
    }
  }

  InvalidName(value) {
    if (value && !this._nameRegex.test(value)) {
      return true;
    } else {
      return false;
    }
  }

  AboveMaxLength(value, previousValue) {
    if (value.length > 20) {
      return previousValue;
    } else {
      return value;
    }
  }
}

export default new FormValidator();
