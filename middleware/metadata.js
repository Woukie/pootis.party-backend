module.exports = function metadata(req, res, next) {
  var breadcrumbs = req.url.split("/");
  breadcrumbs = breadcrumbs.slice(1, -1);
  console.log(breadcrumbs);
  req.app.locals.breadcrumbs = breadcrumbs;
  next();
};
