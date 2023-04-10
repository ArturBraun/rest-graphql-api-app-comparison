import { parseResolveInfo } from "graphql-parse-resolve-info";

const getRequestedFields = (resolveInfo) => {
  const parsedResolveInfo = parseResolveInfo(resolveInfo);
  return parsedResolveInfo.fieldsByTypeName;
};

export { getRequestedFields };
