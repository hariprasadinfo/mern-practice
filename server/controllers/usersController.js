const users = require("../models/Users");
const jwt = require('jsonwebtoken');
const middleware = require('../middleware/middleware');

exports.allUsers = async (req, res) => {
  const user = await users.find({});
  return res.send(user);
};

exports.getUserById = async (req, res) => {
  const userObject = await users.findById(req.params.id);
  return res.status(200).json({ details: userObject });
};

// exports.updateBook = async (req, res) => {
//   const body = req.body;
//   const book = await books.findByIdAndUpdate(req.params.id, body);
//   return res
//     .status(200)
//     .json({
//       status: "200",
//       message: "book details has been updated successfully...",
//     });
// };

// exports.deleteBook = async (req, res) => {
//   const BookObject = await books.findByIdAndDelete(req.params.id);
//   return res
//     .status(200)
//     .json({
//         Book:
//         BookObject.name + "Book has been deleted successfully....",
//     });
// };

exports.registerUser = async (req, res) => {
    try {
        const { username, email, password, confirmPassword} = req.body;
        console.log(username + ' '+ email + ' '+ password + ' '+ confirmPassword);
        const isExist = await users.findOne({ username });
        if (isExist) {
          return res
            .status(400)
            .json({ message: username + " User details are already exists...." });
        }

        if (password !== confirmPassword) {
            return res
            .status(400)
            .json({ message: "Passwords are not matching...." });
        }
        
        const addUser = await users.create({
            username,
            email,
            password,
            confirmPassword
          });

          await addUser.save();

          return res
            .status(200)
            .json({
              user: username + " user has been added successfully....",
            });
    }
    catch(err) {
        console.log(err);
        return res
            .status(500)
            .send( "500 internal server error...");
    }

};

exports.login = async (req, res) => {
    try {
        const { email, password} = req.body;
        const isExist = await users.findOne({ email });
        if (!isExist) {
          return res
            .status(400)
            .json({ message: username + " User details are not exist...." });
        }

        if (isExist.password !== password) {
            return res
            .status(400)
            .json({ message: "Invalid credentials!!!" });
        }
       
        let payload = {
            user: {
                id: isExist.id
            }
        }

        jwt.sign(payload, 'jwtSecret', { expiresIn: 3600000}, 
            (err, token) => {
                if (err) throw err;
                return res.json({ token: token, userId: isExist.id, userName: isExist.username })
            }
        )
    }
    catch(err) {
        console.log(err);
        return res
            .status(500)
            .send( "500 internal server error...");
    }

};
