
<h1 align="center">  
<img alt="Happy" title="#Happy" src="https://github.com/camilacno/happy-web/blob/master/Home.jpg" />  
</h1>

<p align="left">
	<img alt="Node.js" 
src="https://img.shields.io/badge/nodejs-green?labelColor=green&logo=node.js&logoColor=white"> 
<img alt="ReactJS" src="https://img.shields.io/badge/reactJS-6cf?logo=react&logoColor=white&labelColor=007ACC">  
<img alt="React Native" src="https://img.shields.io/badge/reactnative-6cf?logo=react&logoColor=white&labelColor=007ACC">  
  <img alt="Typescript" src="https://img.shields.io/badge/typescript-informational?labelColor=blue&logo=typescript&logoColor=white"> 
  <img alt="Git" 
src="https://img.shields.io/badge/git-grey?labelColor=greu&logo=git&logoColor=white"> 
</p>

<p>
	<img alt="expo" 
	src="https://img.shields.io/badge/expo-white?labelColor=grey&logo=expo&logoColor=white">
		<img alt="sqlite" 
	src="https://img.shields.io/badge/sqlite-blue?labelColor=blue&logo=sqlite&logoColor=white">

</p>

<p>
	 <img alt="Mode" src="https://img.shields.io/badge/mode-development-orange">   
  <a href="https://www.linkedin.com/in/camilacno" target="_blank"> 
    <img src="https://img.shields.io/badge/-camilacno-007ACC?logo=linkedin&logoColor=white&labelColor=007ACC" alt="Developer LinkedIn" />
</p>

## About the Application

**Happy** is a Web and Mobile application designed to connect orphanages and people who want to make a child's day happier. 
As an **orphanage**, the user can save its profile, inform schedule and better days to visit, as well as save pictures.
As a **regular user**, he/she can search for orphanages close to hisqher location, see all the visit information and get orphanage contact infos.

This is the **web** repo. To access the server an mobile repos, go to:

[Server](https://github.com/camilacno/happy-server)
</br>
[Mobile](https://github.com/camilacno/happy-mobile)

This v1.0 of this application was developed during **Next Level Week #3**, a Rocketseat project.

###### *Go to <a href="#content">Content</a>*.

## Content

 -   <a href="#about-the-application">About the Application</a>
 - <a href="#main-libs">Main libs</a>
 -  <a href="#project-layouts">Project layouts</a>
   -  <a href="#how-to-run">How to run</a>
		-   <a href="#api">Server</a>
        -   <a href="#web">Web</a>
        -   <a href="#mobile">Mobile</a>
  
## Main Libs

[React Navigation](https://reactnavigation.org/) | [Express](https://expressjs.com/pt-br/) | [KnexJS](http://knexjs.org/) |  [Axios](https://github.com/axios/axios) | [SQLite3](https://www.sqlite.org/index.html) | [Postgres](https://www.npmjs.com/package/pg) | [Nodemailer](https://nodemailer.com/about/) | [Expo Google Fonts](https://github.com/expo/google-fonts) 
 
[EditorConfig](https://editorconfig.org/) | [ESLint](https://eslint.org/) | [Prettier](https://prettier.io/)
	
###### *Go to <a href="#content">Content</a>*.

## Project Layouts

- [Figma v1.0 web](https://www.figma.com/file/mDEbnoojksG4w8sOxmudh3/Happy-Web)
- [Figma v1.0 Mobile](https://www.figma.com/file/3OtHpoAR09vzKDXwjf0gKF/Happy-Mobile-(Copy))

###### *Go to <a href="#content">Content</a>*.

## How to run

### Requirements
- **[Node.js](https://nodejs.org/en/)**  
- **[Git](https://git-scm.com/)**  
- **[NPM](https://www.npmjs.com/)**  or  **[Yarn](https://yarnpkg.com/)**.
- **[Expo](https://expo.io/)**  
###### *Go to <a href="#content">Content</a>*.

### Server


##### Cloning
```bash
$ git clone https://github.com/camilacno/happy-server.git
```
 ##### Installing dependencies
   ```bash
$ yarn # or npm install
```
  
 ##### Database setup and tables creation
  ```bash
$ yarn knex:migrate # or npm run knex:migrate
```
  
  ##### Start API
  ```bash
$ yarn start # or npm start
```
<br>

### Web
<img alt="design do projeto" width="650px" src="https://github.com/camilacno/happy-web/blob/master/LayoutWeb.png" />

##### Cloning
```bash
$ git clone https://github.com/camilacno/happy-web.git
```
 ##### Installing dependencies
   ```bash
$ yarn # or npm install
```
  
 ##### Start web application
 ```bash
$ yarn start # or npm start
```
<br>

### Mobile
 <img alt="design do projeto" width="650px" src="https://github.com/camilacno/happy-mobile/blob/master/LayoutMobile.png" />

##### Cloning
```bash
$ git clone https://github.com/camilacno/happy-mobile.git
```
 ##### Installing dependencies
   ```bash
$ yarn # or npm install
```

##### Start the application
 ```bash
$ yarn start # or npm start
```

