import { srcSet } from '../../../helpers/src-set';
import { module, test } from 'qunit';

module('Unit | Helper | src set');

test("returns a string", function(assert) {
  var attrString = srcSet();
  assert.ok(typeof(attrString) === "string");
});


test("contains the src attribute", function(assert) {
  var attrString = srcSet({
    src: "image1.png"
  });
  assert.equal(attrString,'src="image1.png"');
});

test("adds a srcset set for a single image", function(assert) {
  var attrString = srcSet({
    src: "img.png",
    sizes: "1200"
  });
  let ok = 'src="img.png" srcset="img.png 1200w"';
  assert.equal(attrString,ok);
});

test("adds a srcset set for a single image with sizes path for index image", function(assert) {
  var attrString = srcSet({
    src: "img.png",
    sizes: "1200",
    "appendSizeForAll": true
  });
  let ok = 'src="img.png" srcset="img-1200.png 1200w"';
  assert.equal(attrString,ok);
});

test("adds a srcset set for multiple sizes", function(assert) {
  var attrString = srcSet({
    src: "img.png",
    sizes: "1200,640,320"
  });
  let ok = 'src="img.png" srcset="img.png 1200w,img-640.png 640w,img-320.png 320w"';
  assert.equal(attrString,ok);
});