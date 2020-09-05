[![Angular banner](https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.sovereignconsult.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fangular-js.png&imgrefurl=https%3A%2F%2Fwww.sovereignconsult.com%2Fblog%2Fimportance-of-angularjs%2F&tbnid=SBIbWZdK_RY4FM&vet=12ahUKEwj0mYzw8NHrAhVUNLcAHaYQAl4QMygHegUIARDXAQ..i&docid=qrfyBrbJS8akvM&w=500&h=480&q=angularjs&client=firefox-b-d&ved=2ahUKEwj0mYzw8NHrAhVUNLcAHaYQAl4QMygHegUIARDXAQ)](https://angularjs.org/)
[![Nodejs banner](https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png)](https://nodejs.org)

<hr>

# Design

FrontEnd- AngularJs,Material,Bootstrap
BackEnd-  NodeJS,ExpressJs,SQL

---
### Screenshots:

## Admin DashBoard
<img src="/views\dashboard(1).PNG">
<img src="/views\dashboard(2).PNG">

## Database University Table
<img src="/views\dbUniversity.PNG">

## Database Users Table
<img src="/views\dbUsers.PNG">

## Login Page
<img src="/views\login.PNG">

## View Page
<img src="/views\view.PNG">
---

## Prerequisite

1.NPM installed
2.Angular installed
3.DataBase

## Install Dependencies

```
$ npm install 
```

## Usage

1.For the Backend
```
$ npm start 
```
2.For the Frontend
```
$ ng Serve 
```
3.Run Sqlserver [ex:XAMPP]

**Configuration**:
1.Change the Database Connection in **server.js** file.

```
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test2",
    multipleStatements:true
});
```
