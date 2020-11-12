import React, { useEffect, useState } from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Image
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootStore } from "../reducers";
import {PostInfo, UserInfo, LikeInfo} from '../states/states';
import { Like } from "./Like";
import configData from "../config.json";
//Refers to the post-id
interface IProps{
  id:number
}

const initialState:UserInfo = {
    id:0,
    email:"",
    password: "",
    firstName: "not",
    lastName:"loaded",
    photo: "/images/defaultImage.svg"
}


export const Post: React.FC<IProps> = (props:IProps) => {
  const postState = useSelector((state:RootStore):[PostInfo, LikeInfo[]]=> state.feed.postsAndLikes[props.id]);
  const usersState = useSelector((state:RootStore) => state.users);

  const [user, setUser] = useState<UserInfo>(initialState);

  const postImage = () =>{
    if(postState[0].photo){
    return (<Card.Img variant="top" src={configData.S3_URL + postState[0].photo} />)
    }
  }
  useEffect(()=>{
    const findUser = () =>{
      let i:any;
      for(i in usersState.users){
          if(postState[0].authorId === usersState.users[i].id){
            setUser(usersState.users[i]);
            break;
          }
      }
    }
   findUser();
  }, [postState,usersState])
  let PostedImage;
  if(postState[0].photo)
  {
    PostedImage = <Card.Img variant="top" src={"https://mailmailmail-images.s3.us-east-2.amazonaws.com/"+postState[0].photo} style={{maxHeight: "400px", width:"auto",display: "block", marginLeft: "auto",  marginRight: "auto"}} />
  }
  return (
    
    <>
      <Card className="mt-5">
        <Card.Body>
          <Card.Title>
            <Image src={"https://mailmailmail-images.s3.us-east-2.amazonaws.com/" + user.photo} height="50" width="50" roundedCircle/>
            <p className="m-2 d-inline">{user && user.firstName} {user && user.lastName}</p>
          </Card.Title>
          {PostedImage}
          <Card className="mb-4">
            <Container>
              <Row>
                <Col className="m-4">
                  <Card.Text>{ postState[0] && postState[0].content}</Card.Text>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Like post = {postState[0]} like = {postState[1]}/>
                </Col>
              </Row>
            </Container>
          </Card>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0" className="blue">
                Comments
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {/* Comments here */}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Form className="mt-4">
            <Form.Group controlId="postComment">
              <Form.Control type="text" />
            </Form.Group>
            <Button className="blue">Enter comment</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
