import { test, runIfMain } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { encode, decode } from "./mod.ts";

test({
  name: "base64 encoding and decoding",
  fn(): void {
    const msg: string = "QUNBQg==";
    const buf: Uint8Array = encode(msg, "base64");
    const str: string = decode(buf, "base64");
    assertEquals(buf, Uint8Array.from([0x41, 0x43, 0x41, 0x42]))
    assertEquals(str, msg)
  }
})

test({
  name: "hex encoding and decoding",
  fn(): void {
    const msg: string = "41434142";
    const buf: Uint8Array = encode(msg, "hex");
    const str: string = decode(buf, "hex");
    assertEquals(buf, Uint8Array.from([0x41, 0x43, 0x41, 0x42]))
    assertEquals(str, msg)
  }
})

test({
  name: "utf8 encoding and decoding",
  fn(): void {
    const msg: string = "ACAB";
    const buf: Uint8Array = encode(msg, "utf8");
    const str: string = decode(buf, "utf8");
    assertEquals(buf, Uint8Array.from([0x41, 0x43, 0x41, 0x42]))
    assertEquals(str, msg)
  }
})

runIfMain(import.meta, { parallel: true })
