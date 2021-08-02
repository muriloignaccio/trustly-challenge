export function routeNotFound(req, res, next) {
  return res.status(404).json({
    status: 404,
    message: 'Page not found',
    documentation_url: 'https://github.com/muriloignaccio/trustly-challenge'
  });
};