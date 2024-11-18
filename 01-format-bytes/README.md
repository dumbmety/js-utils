## formatBytes

Convert bytes to a human-readable string.

### Description

- First, we need to get bytes as numbers. If it's not a number, we will convert it to a number.
- After that, if we didn't get a number or our number was 0, we return "0 B" as output.
- Then we start finding the value and the unit of bytes that should be returned as a string.

### Examples

```js
formatBytes(); // 0 B
formatBytes(1024); // 1 KB
formatBytes(1024 * 1024); // 1 MB
formatBytes(1024 * 1024 * 9); // 9 MB
formatBytes(1024 * 1024 * 1024); // 1 GB
formatBytes(1024 * 1024 * 1024 * 9); // 9 GB
formatBytes(1024 * 1024 * 1024 * 1024); // 1 TB
formatBytes(1024 * 1024 * 1024 * 1024 * 9); // 9 TB
formatBytes(1024 * 1024 * 1024 * 1024 * 1024); // 1 PB
formatBytes(1024 * 1024 * 1024 * 1024 * 1024 * 9); // 9 PB

formatBytes(17605591, 0); // 17 MB
formatBytes(17605591, 1); // 16.8 MB
formatBytes(17605591); // 16.79 MB
formatBytes(17605591, 1, "fa"); // 16.8 مگابایت
```
