export const checkEasyLanguage = (form: HTMLFormElement) => {
  let valid = false;
  let partialValid = true;

  const selectArray: NodeListOf<HTMLSelectElement> =
    form.querySelectorAll("select");

  for (let i = 0; i < selectArray.length && partialValid; i++) {
    if (i == 0) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
        if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index !== 2
        ) {
          partialValid = false;
        }
      }
    }

    if (i == 1) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
        if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index !== 1
        ) {
          partialValid = false;
        }
      }
    }

    if (i == 2) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
        if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index !== 3
        ) {
          partialValid = false;
        }
      }
    }

    if (i == 3) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
        if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index !== 3
        ) {
          partialValid = false;
        }
      }
    }

    if (i == 4) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
        if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index !== 1
        ) {
          partialValid = false;
        }
      }
    }
  }

  return partialValid;
};
