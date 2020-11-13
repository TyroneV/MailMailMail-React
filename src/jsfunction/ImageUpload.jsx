import S3 from "react-aws-s3";
import configData from "../config.json";


const axios = require("axios");
const url =
  configData.SERVER_URL + "/userByEmail.app?email=sneakykey@email.com";
export const ImageUpload = async (e) => {
  try {
    const response = await axios.get(url);
    const notakey = await response.data;

    const config = {
      bucketName: "mailmailmail-images",
      dirName: "profileImages",
      region: "us-east-2",
      accessKeyId: notakey.firstName,
      secretAccessKey: notakey.lastName,
    };
    
    const ReactS3Client = new S3(config);
    const newFileName = JSON.parse(sessionStorage.getItem('user')).id;
   const data = await ReactS3Client.uploadFile(e.files[0], newFileName);
   return data;

  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};

export default ImageUpload;

