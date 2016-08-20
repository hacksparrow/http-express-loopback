module.exports = function () {

  return function ipTracer(req, res, next) {
    console.log(req.ip)
    next()
  }

}
