const getRequestedFieldsSelectObject = (requestedFields) => {
  const requestedFieldsSelectObject = {};

  requestedFields.forEach((field) => {
    requestedFieldsSelectObject[field] = true;
  });

  return requestedFieldsSelectObject;
};

export { getRequestedFieldsSelectObject };
