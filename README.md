# Ministry-Jobs-JA
# Project info
This website scrapes job postings from the official Jamaican Ministry's career pages; so you can easily find them all in one place

# Live Demo
Available at https://public-service-jobs-frontend.onrender.com

# Features
**Jobs**
* Users can see job postings from different Jamaican Ministries
* Users can go to the official job positing page
  
# Behind the scenes
**Front End**
* Vite
* Material UI components are used for styling
* Redux and Redux persist for state management
* Requests are done with axios
* Linting is done with eslint

**Backend End**
* Express and Node
* Cheerio is used for webscraping
* Linting is done with eslint
* Cross Origin Resource vulnurabilty is handled with express cors
* Cross Site Scripting attacks are handled with express helmet
* Logging is done with morgan
