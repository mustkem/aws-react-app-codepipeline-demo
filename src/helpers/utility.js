export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    if (typeof value === "string") {
      isValid = value.trim() !== "" && isValid;
    } else if (typeof value === "object") {
      isValid = Object.keys(value).length > 0 && isValid;
    }
  }

  if (rules.number) {
    const pattern = /^[0-9]+$/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.mobileNumber) {
    const pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    isValid = pattern.test(value) && isValid;
  }

  if (value && rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (value && rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (value && rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (value && rules.isLatitude) {
    const pattern = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;
    isValid = pattern.test(value) && isValid;
  }
  if (value && rules.isLongitude) {
    const pattern = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;
    isValid = pattern.test(value) && isValid;
  }
  if (value && rules.isWebsite) {
    const pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
    isValid = pattern.test(value) && isValid;
  }

  if (value && rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }
  if (rules.matchDependent) {
    const targetInput = document.getElementById(rules.matchDependent);
    const synthaticEventObj = {
      target: targetInput,
    };
    Object.keys(targetInput).forEach((key) => {
      if (key.includes("reactEventHandlers")) {
        setTimeout(() => {
          if (targetInput.value !== "") {
            targetInput[key].onChange(synthaticEventObj);
          }
        }, 1);
      }
    });
  }

  if (rules.match) {
    const targetInput = document.getElementById(rules.match);
    isValid = value === targetInput.value && isValid;
  }

  return isValid;
};
