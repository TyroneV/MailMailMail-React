import React from "react";
import { Button, Form, Modal, Image } from "react-bootstrap";
import S3 from "react-aws-s3";
import configData from "../config.json";

const axios = require("axios");
const url =
  configData.SERVER_URL + "/userByEmail.app?email=sneakykey@email.com";
export const ImageUpload = (props) => {
  // ReactS3Client.uploadFile(file, newFileName).then(data => console.log(data).catch(err => console.error(err)));

  const upload = async (e) => {
    let updateUser = JSON.parse(sessionStorage.getItem('user'));
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
    //   console.log(sessionStorage.getItem('user'));

     const data = await ReactS3Client.uploadFile(e.target.files[0], newFileName);
     console.log(data);
     updateUser.photo = data.key;
     await axios.put("http://3.129.45.151:8081/Project2-1.0.0" + "/updateUser.app", updateUser);

    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
    // console.log(updateUser);
    // const newSess = JSON.stringify(updateUser);
    // sessionStorage.removeItem('user');

    // sessionStorage.setItem('user', newSess);

  };

  return (
    <>
      <Form.File id="newPic" onChange={upload} />
    </>
  );
};
