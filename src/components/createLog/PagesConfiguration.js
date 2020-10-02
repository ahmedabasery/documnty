const checkIfNotProvided = (v, message = "this value is required") => {
  if (!v) return message;
  return false;
};

export const tapsName = [
  "General",
  "Detailed Items",
  "Acknowledgement",
  "Page 4",
];
export default [
  {
    name: "general_delivery_trackNum",
    checkError: ({ value }) =>
      checkIfNotProvided(value, "Delivery track Number is required"),
    tap: tapsName[0],
  },
  {
    name: "general_delivery_via",
    checkError: ({ value }) =>
      checkIfNotProvided(value, "Delivery Company is required"),
    tap: tapsName[0],
  },
  {
    name: "general_from_address",
    checkError: ({ value }) =>
      checkIfNotProvided(value, "Source address is required"),
    tap: tapsName[0],
  },
  {
    name: "general_from_company",
    checkError: ({ value }) =>
      checkIfNotProvided(value, "Source company is required"),
    tap: tapsName[0],
  },
  {
    name: "general_from_transBy",
    checkError: ({ value }) =>
      checkIfNotProvided(value, "Source personal is required"),
    tap: tapsName[0],
  },
  {
    name: "general_to_address",
    checkError: ({ value }) =>
      checkIfNotProvided(value, "Destination address is required"),
    tap: tapsName[0],
  },
  {
    name: "general_to_att",
    checkError: ({ value }) =>
      checkIfNotProvided(value, "Destination personal is required"),
    tap: tapsName[0],
  },
  {
    name: "general_to_company",
    checkError: ({ value }) =>
      checkIfNotProvided(value, "Destination company is required"),
    tap: tapsName[0],
  },
  {
    name: "newItemsList",
    tap: tapsName[1],
    checkError: ({ value }) => checkIfNotProvided(value, "There is no items "),
  },
  {
    name: "ack_rece_date",
    tap: tapsName[2],
    checkError: ({ value, formValues }) =>
      formValues.ack_rece_check
        ? checkIfNotProvided(
            value,
            "Date of Acknloedgement reception is required "
          )
        : false,
  },
  {
    name: "ack_rece_by",
    tap: tapsName[2],
    checkError: ({ value, formValues }) =>
      formValues.ack_rece_check
        ? checkIfNotProvided(
            value,
            "The personal received the acknowledgement is required "
          )
        : false,
  },
  {
    name: "ack_rec_company",
    tap: tapsName[2],
    checkError: ({ value, formValues }) =>
      formValues.ack_rece_check
        ? checkIfNotProvided(
            value,
            "The company received the acknowledgement is required "
          )
        : false,
  },
];
