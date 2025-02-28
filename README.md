# React JS Paololeoni.it     
![ReactJS Resume Website Template](resume-screenshot.jpg?raw=true "ReactJS Resume Website Template")

# Description
This is a ReactJS based personal resume website template. Data is fed directly from a JSON File. This means that in its final form, it can be customized and used by anybody simply by filling in their own personal info into the JSON file and the changes will be dynamically fed into the site. If you would like to use this template for your own personal resume website, read on to learn how to build your own copy.

# Make it Your Own!

## Make sure you have what you need
- To build this website, you will need to have Node >=6 downloaded and installed on your machine. 
- If you don't already have it, you can get it <a href="https://nodejs.org/en/download/">HERE</a>
## Install
launch the `npm install`
## Download the template
- All you will have to do now is replace the "public" and "src" folders of your newly built app with mine that you just downloaded. 
- If you run `npm start` now, you should see that your app renders the same as the one at the live demo link above.
## Replace images and fonts
> Replace the images, and fonts if you like, with your own. 
- All you have to do is replace (***YOU MUST KEEP THE SAME NAMES ON THE IMAGES***)the images at :
    - public/images/header-background.jpg
    - public/images/testimonials-bg.jpg
    - public/favicon.ico with your own. 
## Fill in your personal info
- To populate the website with all of your own data, open the **public/resumeData.json** file and simply replace the data in there with your own. 
- Images for the porfolio section are to be put in the **public/images/portfolio folder**
## Make any styling changes you would like
Of course, all of the code is there and nothing is hidden from you so if you would like to make any other styling changes, feel free!
## Enjoy your new Resume Website
When you're all done, run `npm start` again and you'll see your new personal resume website! Congratulations!
## Test, Build and Deploy the generated code
- Execute `npm start` to test locally
- Execute `npm run build` thath will creates a build directory with a production build of your app. 
- Inside the build/static directory will be your JavaScript and CSS files. 
- Each filename inside of build/static will contain a unique hash of the file contents. This hash in the file name enables long term caching techniques.

# NPM INSTALL Issues

## fontawesome
Delete the file in C:\Users\[your user name]\.npmrc
- `npm config delete "@fortawesome:registry" https://npm.fontawesome.com/`
- `npm login` -> paoleon
- `npm whoami`
- `npm install`

# Generate CV
- npm install jspdf jspdf-autotable
- edit public\cvData.json
