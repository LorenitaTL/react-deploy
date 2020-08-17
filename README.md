
## Public React js app to github pages

Step by step: 

	1. npm init react-app react-deploy
	2. cd react deploy
	3. npm install gh-pages --save-dev
	4. Modify package.json addying the next lines:  

		1. Put  this line is on the start script
		2. "homepage": "https://lorenitatl.github.io/react-deploy", (this is the link of the github pages, isn´t link of repository)
		3. Put this lines on the scripts bloc
		4. "predeploy":"npm run build",
		5. "deploy":"gh-pages -d build",
	5. git init
	6. git remote add origin https://github.com/....
	7. Change content of App.js (if you want)
	8. git status
	9. git add .
	10. git commit -m "message for commit"
	11. npm run deploy
	12. git push - u origin master
	13. Go to repository settings on github and search link of my github-page

