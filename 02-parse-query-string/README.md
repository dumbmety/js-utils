## parseQueryString

Parse a query string into an object of key-value pairs.

### Description

- This utility takes a query string (e.g., `?name=John&age=30&isAdmin=true`) and converts it into a JavaScript object where each query parameter is a key-value pair.
- It removes the leading `?` if present and splits the string into individual parameters.
- Each value is parsed into its appropriate type:
  - `"true"` and `"false"` are converted to `boolean`.
  - Numeric values are converted to `number`.
  - All other values remain as `string`.
- If the input is not a valid query string or is empty, the function returns an empty object.

### Examples

```js
parseQueryString("?name=John&age=30&isAdmin=true");
// Output: { name: 'John', age: 30, isAdmin: true }

parseQueryString("?city=New%20York&zip=10001");
// Output: { city: 'New York', zip: 10001 }

parseQueryString("?product=laptop&price=1299.99&available=false");
// Output: { product: 'laptop', price: 1299.99, available: false }

parseQueryString();
// Output: {}
```
