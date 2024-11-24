const jwt = require("jsonwebtoken");
const createJWT = () => {
  const payload = {
    userId: 123,
    username: "exampleUser",
  };
  const secretKey = "salainenAvainJUU";

  const token = jwt.sign(payload, secretKey);
  console.log("JWT token", token);
  const verifyJWT = () => {
    const secretKey = "salainenAvainJUU";
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        console.log.error("JWT verification failed", err);
      } else {
        console.log("JWT verification success", decoded);
      }
    });
  };
  verifyJWT();
};

createJWT();

