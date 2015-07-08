import Ember from 'ember';

const {
  isNone
} = Ember;


const buildSrcSetFragment = function(index, size, params) {
  let filename = params.src.substr(0, params.src.lastIndexOf('.'));
  let ext = params.src.substr(params.src.lastIndexOf('.') + 1);
  let del = params.delimiter || "-";

  // image1-1200.png 1200w
  let path = params.appendSizeForAll || index !== 0 ? `${filename}${del}${size}.${ext}` : params.src;
  path = path.replace(/ /,'');
  return `${path} ${size}w`;
};

export function srcSet(params /*, hash*/) {

  if( isNone(params)) {
    return "";
  }

  params.src = params["src"] || "";
  params.appendSizeForAll = !!params.appendSizeForAll;

  let attr = `src="${params.src}"`;

  if (!isNone(params.sizes)) {
    let set = params.sizes.split(",").map(function(size, index){
      return buildSrcSetFragment(index, size, params);
    }).join(",");
    attr += ` srcset="${set}"`;
  }

  return attr;
}

export default Ember.HTMLBars.makeBoundHelper(srcSet);
