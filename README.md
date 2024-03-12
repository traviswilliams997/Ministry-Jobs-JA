# Ministry Jobs JA
# Project Info
This website scrapes job postings from the official Jamaican Ministry's career pages; so you can easily find them all in one place

# Live Demo
Available at https://public-service-jobs-frontend.onrender.com

# Features
**Jobs**
* Users can see job postings from different Jamaican Ministries
* Users can go to the official job positing page
  
# Behind the scenes
**Frontend**
* Vite
* Material UI components are used for styling
* Redux and Redux persist for state management
* Requests are done with axios
* Linting is done with eslint

**Backend**
* Express and Node
* Cheerio is used for webscraping
* Linting is done with eslint
* Cross Origin Resource vulnurabilty is handled with express cors
* Cross Site Scripting attacks are handled with express helmet
* Logging is done with morgan

**Deployment**
* Both frontend and backend are deployed on Render.com and auto redeploy after commit to main branch
