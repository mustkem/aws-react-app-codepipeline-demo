export default {
  f_name: {
    type: "text",
    name: "f_name",
    value: "",
    valid: false,
    touched: false,
    validation: {
      required: true,
    },
  },
  m_number: {
    type: "text",
    name: "m_number",
    value: "",
    valid: false,
    touched: false,
    validation: {
      required: true,
      mobileNumber: true,
    },
  },
};
