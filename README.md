[![Stories in Ready](https://badge.waffle.io/Worriors/RBK-Warriors.svg?label=ready&title=Ready)](http://waffle.io/Worriors/RBK-Warriors)

# RBK-Warriours
> Social platform that connects RBK alumni together and expose their skills to public.

## Production Url
[rbk-warriors.herokuapp.com](http://rbk-warriors.herokuapp.com/)
## Table of Contents

1. [Features](#Features)
2. [Usage](#Usage)
    1. [Students](#students)
    2. [Admin](#Admin)
    3. [Guests](#Guests)
3. [Requirements](#requirements)
4. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    2. [Running Tests](#running-tests)
    3. [Running Locally](#running-locally)
5. [Team](#team)
6. [Contributing](#contributing)
7. [Style guide](#Style-guide)

## Features

### Summary:
Web application that provide decient information about RBK students starting from bussnis contact information going through their tecnical projects 

### Problem:
How can we find a dynamic way to keep the students up to date after graduation and connected to each others.

### Our Solution:
We've implemented automatic and manual profile updating for students to reflect their contibutions and progress during RBK and after.
Moreover we've created a cpanel for system's admin to track and manipulate the data flow of this web-app.

## Usage
#### Students:
>from any page just scroll down to the page footer then press "Sign in with GitHub"
If it's the first time you should complete sign-up proccess then wait for admin confirmation, otherwise you will be directed automatically to your profile.
from the top navigation bar select "My profile tab" then chooce "Add project" or "Add achievements" complete the form and press "Add" button.
#### Admin:
> From the browser url bar type "/login" after website main domain to access the login page, if you are already logged in you will be redirected to cpanel automatically, if not you should enter the admin creditial infos then press "Login".
From cpanel dashboard you can see notification blocks for users, projects and questions which waiting for confirmation.
From left-side nav bar press on "Manage users", "Manage projects" or "Manage projects" to access pending requests, inside waiting list press on "approve" or "delete" button to control each request, at any time you can press on "delete" button from the bellow list to remove the data.
From "Manage gallery" press on "choose files" or drag and drop the images in the box below, then press on "upload all" button or just "upload" for individual image upload, at any time you can delete from the archive list or cancel the ongoing upload progress.
### Guests:
> in home page scroll up to navigation bar and select one of following options: warriors, projects, gallery, FAQ, about us.
from warriours you can find list of all RBK students press on "view more" to open student profile page.

## Requirements
- Angular 2
- mongoDB 2.2.25
- NodeJS 4.x.x

## Development

### Tech Stack

#### Frontend

* Angular2 CLI
* Angular ng-upload
* bootstrap

#### Backend
* Nodejs
* Express
* Mongoose
* Morgan
* Multer

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Running Tests

>For the front-end test, from within the root directory:
```sh
npm test //functionality
npm tslint //style
```
>For the back-end test run:
```sh
mocha <path of test file> //functionality
nom eslint //style
```
### Running Locally
Within the root directory:
```sh
npm build
npm start
```
## Team

  - __Product Owner__: Dania Hamdan.
  - __Scrum Master__: Ola Al-khateeb.
  - __Development Team Members__: Salim Bakri, Montaser Rahmani, Ola Al-khateeb, Dania Hamdan.

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Style guide
See [STYLE-GUIDE.md](STYLE-GUIDE.md) for coding style instructions.