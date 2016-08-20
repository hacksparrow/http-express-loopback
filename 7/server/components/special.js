module.exports = function (loopbackApplication, options) {

  loopbackApplication.get(options.mountPath, function (req, res) {
    res.send('You have reached a special place!')
  })

}
