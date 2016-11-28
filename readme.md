----------------------
# Installations
----------------------

1: install Node.js (https://nodejs.org/en/)

2: Install ruby and its dev kit (https://rubyinstaller.org/)

3: Install ruby gem compass (https://rubygems.org/search?utf8=%E2%9C%93&query=compass)

4: Run a command to init compass in project directory and keep the config.rb file as it
Command => compass init

5: Now install dependencies and package wit this command
Command => npm install



----------------------
# Directory Structure
----------------------

All of your working files will be in source folder and it will output the file in build folder

Add all the font file in source->fonts

Add all the image files in source->images and the image which you want to conver to data-uri to avoid http calls, add them into source->images->inlie

Add all the js file in source->js for libraries use lib folder

Add all the .scss file in source->sass

Add all the html partials file in source->template




----------------------
# Gulp Packages
----------------------

gulp: 			To use gulp

del: 			to clean the build folder

browser-sync: 	for live relead and mobile testing

gulp-imagemin:	To minimize the image size to possible level

gulp-newer:		To apply function only on new files

gulp-imacss:	To change images to data uri to avoid http calls

gulp-preprocess	To create html partials

gulp-sass: 		To change the output style of final css file

gulp-pleeease: 	To add vendor prefixes automatically

gulp-compass:	To use compass mixins

gulp-jshint:	To log js error in console




----------------------
# Gulp Tasks
----------------------

watch: 			Runs all the tasks automaticall and waits for any change

cleanBuild:	 	Cleans the build folder

browsersync: 	For reload and mobile testing

html:			To merge the html partials and output the complete html files 

sass:			Changes inline images to data uri and complies sass to css

images:			Minimizes, copies new images into build folder

imageuri:		Change inline images to data uri

fonts:			Copies new font files to build folder

scripts:		Copies and debugs the script files