To start the project locally:

1: npm install
2: npm start
3: visit project at locahost:4200

I used Angular and ngrx to create this application. Ngrx is a bit heavy handed/boilerplate heavy for 
this type of site, but it does provide a nice structure if I ever want to expand it. 

On load the site requests movies from omdb with the search term Batman. When these return
each individual movie then requests each movies' more detailed data. 

If sessionStorage is available, the results for each of the above calls will be cached there, this
helps speed up the app greatly for refreshes, and since all the content is unlikely to change often, serves our needs well.

Test coverage is extremely minimal, and would be the focus of additional work/time. 

I did not experience any issues with the movie images so I am merely using the url provided by the data,
but if the image fails to load, I have included a backup image in assets. 

The project is deployed via firebase here: https://moviemock-64375.web.app
