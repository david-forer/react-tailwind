# Project Name
React Tailwind
This is a simple e commerce page that has user authentication. I used Auth0 for the authentication portion. I used it because it is a popular tool for production ready websites. I am getting the products from an APi called https://fakestoreapi.com/. I used this API because I hadn't really seen it being used much. It has limited data but good docs. For the CSS I am using TailwindCSS in Just in time mode. I used JIT because of the small size of the css file. Sometimes it takes a bit for the data to load so I also used a Loader to show users it is loading. There are twenty products total in this react ecommerce app.


> Live demo [_here_](https://react-tailwind-eight.vercel.app/). 

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)



## General Information

- What problem does it solve? For this app I wanted to show that you can do a simplistic site in REACT that wouldn't be a drain on time or budget for a small entrepenuer. 
- What is the purpose of your project? The purpose was to combine popular technologies and prove to myself that I can build functional apps for a small business




## Technologies Used

- Tech 1 - React
- Tech 2 - Tailwind CSS
- Tech 3 - Vite
- Tech 4 - Auth0
- Tech 5 - Cloudinary


## Features

- All products page that goes to an individual product
- Drop down Cart page with a total and which allows removing items
- Authorized users can sign up, log in, and log out
- Featured Products on home page
- About us page for the company


## Screenshots

![HomePage screenshot](https://res.cloudinary.com/david-j-forer/image/upload/v1636634278/homepage-top_eyozwl.png)
![Products Page screenshot](https://res.cloudinary.com/david-j-forer/image/upload/v1636634278/homepage-top_eyozwl.png)
![Product Page screenshot](https://res.cloudinary.com/david-j-forer/image/upload/v1636634298/product_page_ndunny.png)
![Cart screenshot](https://res.cloudinary.com/david-j-forer/image/upload/v1636634307/cart_oikdx7.png)


## Setup

1. git clone https://github.com/david-forer/react-tailwind.git
2. npm install or yarn to install dependencies
3. Start an account at [Auth0] (https://auth0.com/)
4. Replace the environment variables in Main.jsx with your own Auth0 domain and client id
5. In Auth0 make sure you put localhost:3000 in for allowed URLs
3. npm run dev will pull up live site on localhost:3000


## Usage

Pretty simple application to show off a small line of products for sale. If you wanted to sell products you would create your own API with the products. Adda buy now button to cart for Stripe or Paypal


## Project Status

Project is: _in progress_ / _complete_ 
The projext as I orignally designed it is complete. I am still working on it by adding in Stripe for CC sales and a full cart page that would allow you to add product amounts

## Room for Improvement

A more robust cart with better styles would be helpful. Add pictures under large individual picture to help see it better (API had only one picture). I would also use my own APi to control products better. Add filtering to the products page.



## Acknowledgements

- I started this project with a fork from [Vivek Kumar @vivekascoder] (https://github.com/vivekascoder) which was an initial set up with vite and tailwind jit



## Contact
Created by [@David-Forer](https://davidjforer.com) - feel free to contact me!
