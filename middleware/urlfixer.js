module.exports = function metadata(req, res, next) {
  if (!req.url.endsWith("/")) {
    res.redirect(301, req.url + "/");
    return;
  }

  next();
};
