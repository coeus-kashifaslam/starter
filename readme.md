----------------------
# Installations
----------------------

**1:** install Node.js (https://nodejs.org/en/)

**2:** Install ruby and its dev kit (https://rubyinstaller.org/)

**3:** Install ruby gem compass (https://rubygems.org/search?utf8=%E2%9C%93&query=compass)
Command => ruby install compass

**4:** Now install Bower to be able to install the vendors
Command => npm install -g bower

**5:** Now install dependencies and package wit this command
Command => npm install

**5:** Now install vendors files
Command => npm install


----------------------
# Directory Structure
----------------------

**--** All of your working files will be in source folder and it will output the file in build folder

**--** Add all the font file in source->fonts

**--** Add all the image files in source->images and the image which you want to convert to data-uri to avoid http calls, add them into source->images->inline

**--** Add all the js file in source->js for libraries use lib folder

**--** Add all the .scss file in source->sass

**--** Add all the html partials file in source->template




----------------------
# Gulp Packages
----------------------

**Bower:**

To install required packages

**gulp:**

To use gulp

**del:**

to clean the build folder

**browser-sync:**

for live reload and mobile testing

**gulp-imagemin:**

To minimize the image size to possible level

**gulp-newer:**

To apply function only on new files

**gulp-imacss:**

To change images to data uri to avoid http calls

**gulp-nunjucks

HTML templating engine

**gulp-sass:**

To change the output style of final css file

**gulp-pleeease:**

To add vendor prefixes automatically

**gulp-compass:**

To use compass mixins

**gulp-jshint:**

To log js error in console




----------------------
# Gulp Tasks
----------------------

**watch:**

Runs all the tasks automatically and waits for any change

**cleanBuild:**

Cleans the build folder

**browsersync:**

For reload and mobile testing

**html:**

To merge the html partials and output the complete html files

**sass:**

Changes inline images to data uri and complies sass to css

**images:**

Minimizes, copies new images into build folder

**imageuri:**

Change inline images to data uri

**fonts:**

Copies new font files to build folder

**scripts:**

Copies and debugs the script files