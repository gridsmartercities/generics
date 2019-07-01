export const formatFormData = (data = []) => {
  return data
    .filter(item => item.name.length > 0 && item.validity.valid)
    .reduce((total, current) => {
      if (current.type === "radio" || current.type === "checkbox") {
        if (current.checked === true) {
          total[current.name] = current.value;
        }
      } else {
        total[current.name] = current.value;
      }
      return total;
    }, {});
};
