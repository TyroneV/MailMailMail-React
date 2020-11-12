import React from "react";
import { Button, Form, Modal, Image } from "react-bootstrap";
import S3 from "react-aws-s3";
import configData from "../config.json";

const axios = require("axios");
const url =
  configData.SERVER_URL + "/userByEmail.app?email=sneakykey@email.com";

export const postImage = async (file) => {
    const response = await axios.get(url);
    const notakey = await response.data;

    const config = {
        bucketName: "mailmailmail-images",
        dirName: "postImages",
        region: "us-east-2",
        accessKeyId: notakey.firstName,
        secretAccessKey: notakey.lastName,
      };

      const ReactS3Client = new S3(config);
      const min = 1;
      const max = 10000000;
      const newFileName = Math.trunc(min + Math.random() * (max - min));

      console.log(newFileName);
      const data = await ReactS3Client.uploadFile(file, newFileName);

      console.log(data);
      return data.key;
};

export default postImage;