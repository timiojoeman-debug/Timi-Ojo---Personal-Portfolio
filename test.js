const assert = require("assert");
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

assert.ok(html.includes("<!DOCTYPE html>"), "missing doctype");
assert.ok(html.includes("<title>"), "missing title tag");
assert.ok(html.includes("Timi Ojo"), "missing author name");
assert.ok(html.includes("lang="), "missing lang attribute");
assert.ok(fs.existsSync(path.join(__dirname, "assets")), "assets/ dir missing");
assert.ok(fs.existsSync(path.join(__dirname, "CV.pdf")), "CV.pdf missing");

console.log("All checks passed.");
