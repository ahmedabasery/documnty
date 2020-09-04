import React from "react";
export default [
  {
    name: "Generel",
    Component: <h2>Page 1</h2>,
    fieldNamesToCheck: [
      "general_delivery_trackNum",
      "general_delivery_via",
      "general_from_address",
      "general_from_company",
      "general_from_transBy",
      "general_to_address",
      "general_to_att",
      "general_to_company",
    ],
  },
  { name: "Detailed Items", Component: <h2>Page 2</h2> },
  { name: "Page 3", Component: <h2>Page 3</h2> },
  { name: "Page 4", Component: <h2>Page 4</h2> },
];
