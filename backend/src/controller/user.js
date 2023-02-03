const { getUserByEmail } = require("../services/userService");
const {response} = require("../dto/send.response");

const getUserController = async (req, res) => {
  const emailId = req.email;
  let data = await getUserByEmail(emailId);
  console.log(data);
  if(data){

      return res.send(response(true, "Data Found", {data:data}));
  }
  else{
    return res.send(response(false, "Not Found", ));

  }
  

};
module.exports = { getUserController };
