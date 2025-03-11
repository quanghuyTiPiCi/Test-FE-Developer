import qs from "qs";
export const getStrapiUrl = (path: string = "") => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
};

export async function fetchAPI(
  path: string = "",
  urlParamsObject?: {},
  options: {} = {},
  headers: {} = {},
) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...options,
  };

  const queryString = qs.stringify(urlParamsObject);

  const requestUrl = `${getStrapiUrl(`/api${path}`)}${queryString ? `?${queryString}` : ""}`;

  const res = await fetch(requestUrl, mergedOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
