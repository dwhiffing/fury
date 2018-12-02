module.exports = exports = function renderer({ Marked }) {
  Marked.image = src => {
    return `<img src="${
      process.env.NODE_ENV === "production" ? "/fury" : ""
    }${src}" />`;
  };

  return Marked;
};
