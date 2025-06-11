# Summary
### The website is running at https://portfolio.missinginfo.me/
## What This is
This is a basic website I will be making to show off projects I have done in the past. It will start out small and get bigger as I get more projects that I can share under my belt. This will mostly consist of school projects to start off with, and grow with more personal projects and professional projects as I have the time to make and add them in. This site will be self-hosted off of my own server machine.
## ERD
### This doesn't really have an ERD, as this website doesn't need a database.
## "data your project will be accessing and using"
I do have more with this:
- any images, general text, etc. will be stored directly in the website files, as this website will be a static page.
- Code for the projects and other files related to those projects will be stored on GitHub and linked via the website.

This helps me use already standard tools to easily store and show off any projects. I am not collecting any information from the user, as that all can be handled via email, etc.
## System Design (might change)
![system design image layout](system-design.svg)
## Website Technologies
### React
React is a library that makes website building much easier, allowing people to build the website with both code and also HTML. It allows for much more dynamic websites and is much easier to use than the older standard of having separate JS and HTML files. It also does routing and many other things. I will be using this because it is the standard, and I have used it before.
### Typescript
Typescript (TS) is a programming language layer that goes on top of JavaScript (JS). It forces strict typing and provides generally better consistency with code. You can do either JS or TS, I just prefer the style of coding that TS does.
### Tailwind
Tailwind is a CSS library that does most of the CSS heavy lifting for it. It instead lets people define CSS instructions in the JSX/TSX (JS/TS+HTML React file) file. This is then compiled into a separate CSS file for you. It gets rid of the many headaches that comes from trying to write CSS manually. I am using this because I really like this library, and it gives really quick and really good looking results.
## Website builder
### Vite
Vite is the development environment and also the compiler that will make my code actually browser readable. This will be used to make the website files that will then be served to the user.
## Website Hosting
### Caddy (might change)
Caddy can do many different things, but it also can host websites and also does all of the annoying SSH certificates for you. I am using this because it is easy to set up, doesn't have much maintenance needed, and I have already used it before.
## Goals
The main goal is to get a basic site set up that is easy to add more information to. This is here for me to learn more about website technologies and how people plan, write, and deploy them.

My current plan, no dates attached:
- finish up this document
- get a barebones website deployed and running manually
- get Github actions to automate the process
- create a landing page with some decent CSS
- slowly build out more of the website from there