## Tech Store Website By React + Simple Backend Crud Operation

### Features : 
1. Add Product 
2. Update Product 
3. My Cart
4. Product Details
5. LogIn / Registration with email/password or google using firebase  

### Explain about project features : 

In this project i worked with backend where i create api and data load in database(MongoDB)
except brand data brand Info come from json in public folder in project. In public folder have some data Info can use this create new product.
Add Product,Update product , My cart , Product details these are privete route you need to login to see page. Only product page is local.

1. Add Product : where you can create new product this product will store in DB through server. Product info rech to server using post method and to see this data in server using get method
2. Update Product : where get specific id to selected product. To send update info to backend using put mathod
3. Product : In Home Page has brand section to click brand section any brand card you can see those specific brand product. To create this i find brand name through params and fetch all product of each brand. showing error for no Product in any brand.
4. Product Details : From Product page you can go to product details and update route
5. My Cart : In Product Details page you can select product for buy and which product are store in my cart page. For create or store data you need to create another database and you can delete this any time  

# Live LinK In Project: <a href="https://tech-store-today.netlify.app/">TechStore</a>
