# std-encoding

[![Travis](http://img.shields.io/travis/chiefbiiko/std-encoding.svg?style=flat)](http://travis-ci.org/chiefbiiko/std-encoding) [![AppVeyor](https://ci.appveyor.com/api/projects/status/github/chiefbiiko/std-encoding?branch=master&svg=true)](https://ci.appveyor.com/project/chiefbiiko/std-encoding)

## Usage

``` ts
import { encode, decode } from "https://denopkg.com/chiefbiiko/std-encoding/mod.ts";

console.log("ACAB in hex", decode(encode("ACAB", "utf8"), "hex"));
```

## API

This module supports `utf8`, `hex`, and `base64` (URL and file name safe) encoding.

#### `encode(str: string, encoding: string = "utf8"): Uint8Array`

Encodes a string assuming the specified encoding format.

#### `decode(buf: Uint8Array, encoding: string = "utf8"): string`

Decodes a buffer to a string with the indicated encoding format.

## License

[MIT](./LICENSE)