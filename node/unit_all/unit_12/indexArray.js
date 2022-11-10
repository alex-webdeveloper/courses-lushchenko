module.exports = {
    f : function (a, b) {
   let res = a.reduce((accum, item) => {
          accum[item[b]] = {};
       accum[item[b]] = item;
          return accum;
      },{});
return res;
    }
}