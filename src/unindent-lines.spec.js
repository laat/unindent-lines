import unindent from "./unindent-lines";
import test from "tape";

const unindentLines = lines => lines.split("\n").map(unindent()).join("\n");

test("unindent lines", assert => {
  assert.equal(unindentLines("\ta\n\t\tb"), "a\n\tb", "should unindent tabs");
  assert.equal(
    unindentLines("\t\t\ta\n\t\t\t\tb"),
    "a\n\tb",
    "should unindent multiple tabs"
  );
  assert.equal(unindentLines(" a\n  b"), "a\n b", "should unindent spaces");
  assert.equal(
    unindentLines("   a\n    b"),
    "a\n b",
    "should unindent multiple spaces"
  );
  assert.end();
});
