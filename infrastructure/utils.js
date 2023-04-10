const getRequestedFieldsSelectObject = (requestedFields) => {
  const requestedFieldsSelectObject = {};

  for (const [type, typeProperties] of Object.entries(requestedFields)) {
    for (const [fieldName, fieldProperties] of Object.entries(typeProperties)) {
      if (isEmptyObject(fieldProperties.fieldsByTypeName)) {
        requestedFieldsSelectObject[fieldName] = true;
      } else {
        const childObjectFields = getRequestedFieldsSelectObject(
          fieldProperties.fieldsByTypeName
        );
        requestedFieldsSelectObject[fieldName] = { select: childObjectFields };
      }
    }
  }

  return requestedFieldsSelectObject;
};

const isEmptyObject = (object) => Object.keys(object).length === 0;

export { getRequestedFieldsSelectObject };
