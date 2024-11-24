const bcrypt = require("bcrypt");

const hashPassword = async () => {
  const password = "munPassu12345";

  try {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("Password:", password);
    console.log("Salt:", salt);
    console.log("Hashed Password:", hashedPassword);
  } catch (err) {
    console.log(err);
  }






};
const comparePassword = async () => {
    const password = "munPassu12345";
    const inputPassword = password;
    const  hashedPassword ='$2b$10$XN0/rUbB4SBYPr2tjskVQuCJsQtV8TC9IogKEmzZomS1YkbtmFzDC' ;
    try{
        const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
        if(isMatch){
            console.log("Password Matched");
        }
        else{
            console.log("Password not Matched");
        }
    }
    catch(err){
        console.log(err);
    
    };
};

hashPassword();
comparePassword();
const password = "munPassu12345";
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, salt);
console.log('Synchronous Hashed Password:', hashedPassword);

