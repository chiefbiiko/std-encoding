import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { encode, decode } from "./mod.ts";

Deno.test({
  name: "base64 encoding and decoding",
  fn(): void {
    const msg: string = "QUNBQg==";
    const buf: Uint8Array = encode(msg, "base64");
    const str: string = decode(buf, "base64");

    assertEquals(buf, Uint8Array.from([0x41, 0x43, 0x41, 0x42]));

    assertEquals(str, msg);
  },
});

Deno.test({
  name: "hex encoding and decoding",
  fn(): void {
    const msg: string = "41434142";
    const buf: Uint8Array = encode(msg, "hex");
    const str: string = decode(buf, "hex");

    assertEquals(buf, Uint8Array.from([0x41, 0x43, 0x41, 0x42]));

    assertEquals(str, msg);
  },
});

Deno.test({
  name: "utf8 encoding and decoding",
  fn(): void {
    const msg: string = "ACAB";
    const buf: Uint8Array = encode(msg, "utf8");
    const str: string = decode(buf, "utf8");

    assertEquals(buf, Uint8Array.from([0x41, 0x43, 0x41, 0x42]));

    assertEquals(str, msg);
  },
});

Deno.test({
  name: "opt-in base64 url safeness",
  fn(): void {
    const msg: string = "function cb() {}";
    const buf: Uint8Array = encode(msg, "base64url");
    const str: string = decode(buf, "base64url");

    assert(!str.includes("-"));
    assert(str.includes("+"));
    assert(!str.includes("_"));
    assert(!str.includes("."));

    assertEquals(str, msg);
  },
});
