const checkIfNotProvided = (v, message = "this value is required") => {
  if (!v) return message;
  return false;
};

export const tapsName = ["General", "Detailed Items", "Page 3", "Page 4"];
export default [
  {
    name: "general_delivery_trackNum",
    checkError: (v) =>
      checkIfNotProvided(v, "Delivery track Number is required"),
    tap: tapsName[0],
  },
  {
    name: "general_delivery_via",
    checkError: (v) => checkIfNotProvided(v, "Delivery Company is required"),
    tap: tapsName[0],
  },
  {
    name: "general_from_address",
    checkError: (v) => checkIfNotProvided(v, "Source address is required"),
    tap: tapsName[0],
  },
  {
    name: "general_from_company",
    checkError: (v) => checkIfNotProvided(v, "Source company is required"),
    tap: tapsName[0],
  },
  {
    name: "general_from_transBy",
    checkError: (v) => checkIfNotProvided(v, "Source personal is required"),
    tap: tapsName[0],
  },
  {
    name: "general_to_address",
    checkError: (v) => checkIfNotProvided(v, "Destination address is required"),
    tap: tapsName[0],
  },
  {
    name: "general_to_att",
    checkError: (v) =>
      checkIfNotProvided(v, "Destination personal is required"),
    tap: tapsName[0],
  },
  {
    name: "general_to_company",
    checkError: (v) => checkIfNotProvided(v, "Destination company is required"),
    tap: tapsName[0],
  },
];
