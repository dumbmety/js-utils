function parseQueryString(queryString) {
  if (!queryString || typeof queryString !== "string") return {};

  return queryString
    .replace(/^\?/, "")
    .split("&")
    .reduce((acc, pair) => {
      const [key, value] = pair.split("=");
      acc[decodeURIComponent(key)] = parseQueryValue(
        decodeURIComponent(value || "")
      );
      return acc;
    }, {});
}

function parseQueryValue(value) {
  const isBoolean = value === "true" || value === "false";
  const isNumeric = !isNaN(value) && value.trim() !== "";

  if (isBoolean) return value === "true";
  if (isNumeric) return parseFloat(value);

  return value;
}
