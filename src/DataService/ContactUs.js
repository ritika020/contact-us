import axios from "axios";

export const sendContactUsForm = async (data) => {
  console.log(data);
  return await axios
    .post("https://nimaaaa-project.herokuapp.com/contactUs", data)
    .then((response) => {
      console.log(response);

      return response;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

// firstName : String,
// lastName : String,
// email: {
//     type: String,
//     unique: true,
//     validate: [validator.isEmail, 'Please provide valid email']
// },
// contactNo : {
//     type : Number,
//     unique : true
// },
// permenentAddress : {
//     type : String
// },
// subject : {
//     type : String
// },
// suggestions : {
//     type : String
// }
