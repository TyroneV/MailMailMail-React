# MailMailMail

In Revature's Social Network everyone is friends with everyone else. Users can register, login to the application, and start sharing multimedia with everyone. Registered users are allowed to modify their personal information and upload their profile pictures. The application provides a search feature that allows users to search out friends and look at their profiles. Users are provided with a "feed", in which they can see what everyone is posting and like posts. Users can access and use the application via an interactive client-side single paged application that stores and retrieves multimedia using AWS S3 and consumes a RESTful web service that provides business logic and access to a database.

### [Link to the Backend](https://github.com/JordanHunnicutt/MailMailMail-Java)

## Technologies Used

* PostgreSQL
* Agile-Scrum
* HTML
* SCSS
* JavaScript
* Typescript
* React
* Redux
* Agile-Scrum
* Enzyme/Jest

## Features
* As a user
  * I can login.
  * I can register.
  * I can write a post.
  * I can like a post.
  * I can search other users and view their profile.
  * I can edit my profile. change my name, password and profile picture.
  * I can ask for a password reset and the application will send me an email on how to reset my password.

## Getting Started
* Download and install [git](https://git-scm.com/downloads).
* Install node from [node.js](https://nodejs.org/).
* Go to your terminal and git clone this repository using: git clone https://github.com/TyroneV/MailMailMail-React.git
* The src/config.json file is where the base endpoints for the application are stored. Change the SERVER_URL if you are hosting the [MailMailMail-Java](https://github.com/JordanHunnicutt/MailMailMail-Java) on a server or change the LOCALHOST_URL to match the localhost you are running the back end on. 
* The base url is referenced in src/actions/actions.ts, src/components/Login.tsx, and src/components/CreatePost.tsx. Change the url that is referenced to match the location your back end is hosted. 
* Cd into MailMailMail-React in your terminal
* Run npm start
* In your browser, go to localhost:3000

## Usage
1. Login Page:
<img src="https://github.com/TyroneV/MailMailMail-React/blob/master/public/images/M3Login.png" />

2. Feed:
<img src="https://github.com/TyroneV/MailMailMail-React/blob/master/public/images/M3Home.png" />

3. Post Example:
<img src="https://github.com/TyroneV/MailMailMail-React/blob/master/public/images/M3Post.png" />

4. Profile Page:
<img src="https://github.com/TyroneV/MailMailMail-React/blob/master/public/images/M3Profile.png" />

5. Edit Profile:
<img src="https://github.com/TyroneV/MailMailMail-React/blob/master/public/images/M3EditProfile.png">

6. Search Function:
<img src="https://github.com/TyroneV/MailMailMail-React/blob/master/public/images/M3Search.png" />

## Contributors
* Jordan Hunnicutt
* Alex Orr
* Enoch Cho
* Robert Porto
* Tyrone Veneracion
