export const checkEasyLanguageValid = (form: HTMLFormElement) => {
  let partialValid = true;

  const selectArray: NodeListOf<HTMLSelectElement> =
    form.querySelectorAll("select");

  for (let i = 0; i < selectArray.length && partialValid; i++) {
    //Select 1 has valid value 2

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

    //Select 2 has valid value 1 or 3
    if (i == 1) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
        if (
          (selectArray[i].options[x].selected &&
            selectArray[i].options[x].index == 2) ||
          (selectArray[i].options[x].selected &&
            selectArray[i].options[x].index == 0)
        ) {
          partialValid = false;
        }
      }
    }

    //Select 3 has valid value 3
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

    //Select 4 has all valid values

    if (i == 3) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
        if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index == 0
        ) {
          partialValid = false;
        }
      }
    }

    //Select 5 has valid value 1

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

export const getEasyLanguagePoints = (form: HTMLFormElement) => {
  const selectArray: NodeListOf<HTMLSelectElement> =
    form.querySelectorAll("select");

  let points: number = 0;

  for (let i = 0; i < selectArray.length; i++) {
    //Select 1 has valid value 2 = 3 points

    if (i == 0) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
        if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index == 2
        ) {
          points = points + 3;
        }
      }
    }

    //Select 2 has valid value 1 = 3 points  or 3 = 1 point
    if (i == 1) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
        if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index == 1
        ) {
          points = points + 3;
        } else if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index == 3
        ) {
          points = points + 1;
        }
      }
    }

    //Select 3 has valid value 3
    if (i == 2) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
        if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index == 3
        ) {
          points = points + 3;
        }
      }
    }

    //Select 4 has all valid values

    if (i == 3) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
        if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index == 3
        ) {
          points = points + 3;
        } else if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index == 2
        ) {
          points = points + 2;
        } else if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index == 1
        ) {
          points = points + 1;
        }
      }
    }

    //Select 5 has valid value 1

    if (i == 4) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
        if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index == 1
        ) {
          points = points + 3;
        }
      }
    }
  }

  return points;
}

export const checkScreenReaderValid = (form: HTMLFormElement) => {
  let valid = true;

  const altTextSelect: HTMLSelectElement | null =
    form.querySelector("select#alt-text");

  if (altTextSelect && valid) {
    for (let x = 0; x < altTextSelect.options.length; x++) {
      if (
        altTextSelect.options[x].selected &&
        altTextSelect.options[x].index !== 2
      ) {
        valid = false;
      }
    }
  }

  const descriptionsSelect: HTMLSelectElement | null = form.querySelector(
    "select#descriptions"
  );

  if (descriptionsSelect && valid) {
    for (let x = 0; x < descriptionsSelect.options.length; x++) {
      if (
        descriptionsSelect.options[x].selected &&
        descriptionsSelect.options[x].index !== 1
      ) {
        valid = false;
      }
    }
  }

  const selectAltTextSelect: HTMLSelectElement | null = form.querySelector(
    "select#select-alt-text"
  );

  if (selectAltTextSelect && valid) {
    for (let x = 0; x < selectAltTextSelect.options.length; x++) {
      if (
        (selectAltTextSelect.options[x].selected &&
          selectAltTextSelect.options[x].index == 0) ||
        (selectAltTextSelect.options[x].selected &&
          selectAltTextSelect.options[x].index == 3)
      ) {
        valid = false;
      }
    }
  }

  const textArea: HTMLTextAreaElement | null = form.querySelector(
    "textarea#description"
  );

  if (textArea && valid) {
    const value = textArea.value.toLowerCase();

    if (
      !value.includes("sunglases") &&
      !value.includes("sunglasses") &&
      !value.includes("sunglas") &&
      !value.includes("sunglass") &&
      value.length < 10
    ) {
      valid = false;
    }
  }

  return valid;
};

export const getScreenReaderPoints = (form: HTMLFormElement) => {
  let points: number = 0;

  const altTextSelect: HTMLSelectElement | null =
    form.querySelector("select#alt-text");

  if (altTextSelect) {
    for (let x = 0; x < altTextSelect.options.length; x++) {
      if (
        altTextSelect.options[x].selected &&
        altTextSelect.options[x].index == 2
      ) {
        points = points + 3;
      }
    }
  }

  const descriptionsSelect: HTMLSelectElement | null = form.querySelector(
    "select#descriptions"
  );

  if (descriptionsSelect) {
    for (let x = 0; x < descriptionsSelect.options.length; x++) {
      if (
        descriptionsSelect.options[x].selected &&
        descriptionsSelect.options[x].index == 1
      ) {
        points = points + 3;
      }
    }
  }

  const selectAltTextSelect: HTMLSelectElement | null = form.querySelector(
    "select#select-alt-text"
  );

  if (selectAltTextSelect) {
    for (let x = 0; x < selectAltTextSelect.options.length; x++) {
      if (
        selectAltTextSelect.options[x].selected &&
        selectAltTextSelect.options[x].index == 1
      ) {
        points = points + 1;
      } else if (
        selectAltTextSelect.options[x].selected &&
        selectAltTextSelect.options[x].index == 2
      ) {
        points = points + 3;
      }
    }
  }

  const textArea: HTMLTextAreaElement | null = form.querySelector(
    "textarea#description"
  );

  if (textArea) {
    const value = textArea.value.toLowerCase();
    if (
      value.includes("sunglases") ||
      value.includes("sunglasses") ||
      value.includes("sunglas") ||
      (value.includes("sunglass") && value.length < 15)
    ) {
      points = points + 1;
    } else if (
      value.includes("sunglases") ||
      value.includes("sunglasses") ||
      value.includes("sunglas") ||
      (value.includes("sunglass") && value.includes("beige")) ||
      (value.includes("gold") && value.length < 15)
    ) {
      points = points + 2;
    } else if (
      value.includes("sunglases") ||
      value.includes("sunglasses") ||
      value.includes("sunglas") ||
      (value.includes("sunglass") && value.includes("beige")) ||
      (value.includes("gold") && value.length < 20)
    ) {
      points = points + 3;
    }
  }

  return points;
}

export const checkSemanticsValid = (form: HTMLFormElement) => {
  let valid: boolean = true;

  const meaningsSelect: HTMLSelectElement | null =
    form.querySelector("select#meanings");

  if (meaningsSelect) {
    for (let x = 0; x < meaningsSelect.options.length; x++) {
      if (
        (meaningsSelect.options[x].selected &&
          meaningsSelect.options[x].index == 3) ||
        (meaningsSelect.options[x].selected &&
          meaningsSelect.options[x].index == 0)
      ) {
        valid = false;
      }
    }
  }

  const descriptionsSelect: HTMLSelectElement | null = form.querySelector(
    "select#descriptions"
  );

  if (descriptionsSelect) {
    for (let x = 0; x < descriptionsSelect.options.length; x++) {
      if (
        descriptionsSelect.options[x].selected &&
        descriptionsSelect.options[x].index !== 1
      ) {
        valid = false;
      }
    }
  }

  const walletSelect: HTMLSelectElement | null =
    form.querySelector("select#wallet");

  if (walletSelect) {
    for (let x = 0; x < walletSelect.options.length; x++) {
      if (
        walletSelect.options[x].selected &&
        walletSelect.options[x].index == 0
      ) {
        valid = false;
      }
    }
  }

  const microphoneSelect: HTMLSelectElement | null =
    form.querySelector("select#microphone");

  if (microphoneSelect) {
    for (let x = 0; x < microphoneSelect.options.length; x++) {
      if (
        microphoneSelect.options[x].selected &&
        microphoneSelect.options[x].index == 0
      ) {
        valid = false;
      }
    }
  }

  const tabSelect: HTMLSelectElement | null =
    form.querySelector("select#addTab");

  if (tabSelect) {
    for (let x = 0; x < tabSelect.options.length; x++) {
      if (tabSelect.options[x].selected && tabSelect.options[x].index == 0) {
        valid = false;
      }
    }
  }

  const anchorSelect: HTMLSelectElement | null =
    form.querySelector("select#anchor");

  if (anchorSelect) {
    for (let x = 0; x < anchorSelect.options.length; x++) {
      if (
        anchorSelect.options[x].selected &&
        anchorSelect.options[x].index == 0
      ) {
        valid = false;
      }
    }
  }

  return valid;
}

export const getSemanticsPoints = (form: HTMLFormElement) => {
  let points: number = 0;

  const meaningsSelect: HTMLSelectElement | null =
    form.querySelector("select#meanings");

  if (meaningsSelect) {
    for (let x = 0; x < meaningsSelect.options.length; x++) {
      if (
        (meaningsSelect.options[x].selected &&
          meaningsSelect.options[x].index != 3) ||
        (meaningsSelect.options[x].selected &&
          meaningsSelect.options[x].index != 0)
      ) {
        points = points + 1;
      }
    }
  }

  const descriptionsSelect: HTMLSelectElement | null = form.querySelector(
    "select#descriptions"
  );

  if (descriptionsSelect) {
    for (let x = 0; x < descriptionsSelect.options.length; x++) {
      if (
        descriptionsSelect.options[x].selected &&
        descriptionsSelect.options[x].index == 1
      ) {
        points = points + 1;
      }
    }
  }

  const walletSelect: HTMLSelectElement | null =
    form.querySelector("select#wallet");

  if (walletSelect) {
    for (let x = 0; x < walletSelect.options.length; x++) {
      if (
        walletSelect.options[x].selected &&
        walletSelect.options[x].index != 0
      ) {
        points = points + 1;
      }
    }
  }

  const microphoneSelect: HTMLSelectElement | null =
    form.querySelector("select#microphone");

  if (microphoneSelect) {
    for (let x = 0; x < microphoneSelect.options.length; x++) {
      if (
        microphoneSelect.options[x].selected &&
        microphoneSelect.options[x].index != 0
      ) {
        points = points + 1;
      }
    }
  }

  const tabSelect: HTMLSelectElement | null =
    form.querySelector("select#addTab");

  if (tabSelect) {
    for (let x = 0; x < tabSelect.options.length; x++) {
      if (tabSelect.options[x].selected && tabSelect.options[x].index != 0) {
        points = points + 1;
      }
    }
  }

  const anchorSelect: HTMLSelectElement | null =
    form.querySelector("select#anchor");

  if (anchorSelect) {
    for (let x = 0; x < anchorSelect.options.length; x++) {
      if (
        anchorSelect.options[x].selected &&
        anchorSelect.options[x].index != 0
      ) {
        points = points + 1;
      }
    }
  }

  return points;
}

export const checkSignlanguageValid = (form: HTMLFormElement) => {
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
          (selectArray[i].options[x].selected &&
            selectArray[i].options[x].index !== 3) 
        ) {
          partialValid = false;
        }
      }
    }

    if (i == 2) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
        if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index !== 2
        ) {
          partialValid = false;
        }
      }
    }

    if (i == 3) {
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

export const getSignlanguagePoints = (form: HTMLFormElement) => {
  const selectArray: NodeListOf<HTMLSelectElement> =
    form.querySelectorAll("select");

  let points: number = 0;

  for (let i = 0; i < selectArray.length; i++) {

    if (i == 0) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
        if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index == 2
        ) {
          points = points + 1;
        }
      }
    }

    if (i == 1) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
         if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index == 3
        ) {
          points = points + 1;
        }
      }
    }

    if (i == 2) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
        if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index == 2
        ) {
          points = points + 1;
        }
      }
    }


    if (i == 3) {
      for (let x = 0; x < selectArray[i].options.length; x++) {
      if (
          selectArray[i].options[x].selected &&
          selectArray[i].options[x].index == 1
        ) {
          points = points + 1;
        }
      }
    }

  }

  return points;
}