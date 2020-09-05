[![Nodejs banner](https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png)](https://nodejs.org)
[![Angular banner](https://raw.githubusercontent.com/dart-lang/angular/master/doc/angulardart-logo.png)](https://angularjs.org/) 


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
