## Project Introduction
This project is a basic prototype for a new web application stack based on Node.js and EJS. The project consists of three components: web-frontend, web-API, and web-CMS. The web-frontend serves a server-side rendered (SSR) HTML page displaying information about a city and a product, along with a grid of brochure cards. The web-API provides a single endpoint to serve all the data needed for the frontend page. The web-CMS hosts tables for city and product data and allows content stakeholders to manipulate data.

## Project Structure
full-stack-brochure-grid-page/
|-- web-frontend/
|   |-- views/
|   |   |-- index.ejs
|   |   |-- error.ejs
|   |-- app.js
|
|-- web-api/
|   |-- controllers/
|   |   |-- cityProductController.js
|   |-- routes/
|   |   |-- index.js
|   |-- services/
|   |   |-- app.js
|   |-- app.js
|
|-- web-cms/
|   |-- controllers/
|   |   |-- productDataController.js
|   |   |-- cityDataController.js
|   |   |-- broucherDataController.js
|   |-- routes/
|   |   |-- index.js
|   |-- services/
|   |   |-- cmsService.js
|   |-- app.js
|   |-- database.js
|-- const.js
|-- package.json
|-- package-lock.json
|-- README.md

## Prerequisites
- Node.js

## Installation Instructions
- clone repository
- cd Full-Stack Brochure Grid Page
- npm install
- cd web-api/
-- node app.js
- cd ../web-cms
-- node app.js
- cd ../web-frontend
- node app.js

## Testing
- url to use in browser: http://localhost:3000/city-product-grid/:city/:product

Possible values for city and products

              CITIES                    PRODUCTS
            -  Berlin                   - Beer
            -  Munich                   - Wine
            -  New York                 - Chocolate
            -  London                   - Coffee
            -  Paris                    - Tea
            -  Tokyo                    - Pizza
            -  Sydney                   - Burger
            -  Rio de Janeiro           - Ice Cream
            -  Cape Town                - Fruits   
            -  Dubai                    - Laptop
            -  Singapore                - Smartphone
            -  Buenos Aires             - Camera
