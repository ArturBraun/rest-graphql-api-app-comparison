import { parseResolveInfo } from "graphql-parse-resolve-info";

const getRequestedFields = (resolveInfo, type) => {
  const parsedResolveInfo = parseResolveInfo(resolveInfo);
  const fieldsFromType = parsedResolveInfo.fieldsByTypeName[type];
  const requestedFields = [];

  for (const field in fieldsFromType) {
    requestedFields.push(fieldsFromType[field].name);
  }

  return requestedFields;
};

export { getRequestedFields };
