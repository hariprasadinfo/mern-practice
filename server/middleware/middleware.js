const  jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    try {
      let token = req.header('x-token');
      if (!token) {
        return res.status(400).send('Token not found')
      }

      let decode = jwt.verify(token,'jwtSecret');
      let payload = {
        // 
      }
      req.user = decode.user;
      next();
    }
    catch(err) {
      console.log(err);
      res.status(500).send('Server Error!!!');
    }
}