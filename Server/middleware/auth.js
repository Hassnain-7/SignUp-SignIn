const middlewareSignUp = (req, res, next) => {
  if (!req.body.fullname) {
    res.status(404).json({ message: "Fullname must be required" });
  }
  if (!req.body.email) {
    res.status(404).json({ message: "Email must be required" });
  }
  if (!req.body.password) {
    res.status(404).json({ message: "Password must be required" });
  }
  next();
};

const middlewareSignIn = (req, res, next) => {
  if (!req.body.email) {
    res.status(404).json({ message: "Email must be required" });
  }
  if (!req.body.password) {
    res.status(404).json({ message: "Email must be required" });
  }
  next();
};

module.exports = { middlewareSignUp, middlewareSignIn };
