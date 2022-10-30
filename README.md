# CLIENT-PROJECT

Creating Admin panel using protected routes and working on Ui components
[website-Deplyment-Link](https://praveenkumar-client-site-praveen3411.vercel.app/)

## User-Login-credentials

1. Email : `eve.holt@reqres.in`
2. Password : `cityslicka`

## DETAILED ABOUT PROJECT

1. Task To create A website using HTML, CSS, React.js, Redux, Thunk & Lot libraries.
2. Create a site using Single-Page-Application by using library of React-Router-Dom
3. **Task-1** A page contains Responsive Navbar & 6 Routes `Home.jsx`, `Login.jsx`, `Products.jsx`, `DashBoard.jsx`, `Blog.jsx`, `PageNotFound.jsx`
4. **Task-2** Make a Login page using Redux & Thunk using original Authentaction
5. **Task-3** Make a protected Route For `DashBaord.jsx` once User Login with Correct Credentials We can Navigate To DashBoard or else Navigate to login Page itself.
6. **Task-4** Make a Search Bar using Debouncing Function in SEO optimization way
7. **Task-5** Implement a Dashboard Page Where he can able to add the products to site and user settings
8. **Task-6** Implement a Carosuel in Dashboard Page

## Folder Structure For Whole Project

- Client-Project Folder
- admin-pannel Folder
- public
- src Folder
  - Assets
  - Components Folder
    - Home.jsx
    - Products.jsx
    - Login.jsx
    - Logout.jsx
    - DashBoard.jsx
    - Logout.jsx
    - PageNotFound.jsx
  - Css Folder
    - DashBoard.css
    - Navbar.css
  - Features Folder
    - Countries-DataBase.jsx
    - Dashboard.jsx
    - NavbarComponent.jsx
    - ProductsData.jsx
    - SearchBar.jsx
    - SearchBarLogic.jsx
    - Carousel.jsx
  - Private Folder
    - ProtectedRoute.jsx
  - Redux Folder
    - Store.jsx
    - UserAuth Folder
      - Auth.action.js
      - Auth.action.types.js
      - Auth.reducer.js
  - Resuable Components Folder
    - ReusableNavbar.jsx
  - Routes
    - AllRoutes.jsx
    - Navbar.jsx
  - App.js

## HOME-PAGE

![HOME-PAGE](https://github.com/praveen3411/Client-Project/blob/4612afd542e1c06c44121ec3a2b46f0f5f7fa8d0/admin-pannel/src/assets/Homepage.png)

- Home page is a static page and Responsive page Which contains Navbar and Routes

## PRODUCTS-PAGE

![PRODUCTS-PAGE](https://github.com/praveen3411/Client-Project/blob/4612afd542e1c06c44121ec3a2b46f0f5f7fa8d0/admin-pannel/src/assets/Productspage.png)

- This Page Which contains Products you can able to view and buy

## LOGIN-PAGE

![LOGIN-PAGE](https://github.com/praveen3411/Client-Project/blob/4612afd542e1c06c44121ec3a2b46f0f5f7fa8d0/admin-pannel/src/assets/Loginpage.png)

1. Login Page is Fully protected with Requrest-Response API.
2. Login Page Contains The protectd Routes `Higher Order Component`
3. User must provide E-Mail and Password To access the dashBoard Page if not it will Redirected To login page untill user credentials.
4. Once the user Login it will automatically redirected to DashBoardPage.

## DASHBOARD-PAGE

![DASHBOARD-PAGE](https://github.com/praveen3411/Client-Project/blob/4612afd542e1c06c44121ec3a2b46f0f5f7fa8d0/admin-pannel/src/assets/DashBoardpage.png)
![DASHBOARD-PAGE](https://github.com/praveen3411/Client-Project/blob/4612afd542e1c06c44121ec3a2b46f0f5f7fa8d0/admin-pannel/src/assets/DashBoard2.png)

1. Once AdminLogin He can see the DashBoard Page and he can access all the functionalities inside it
2. DashBoard which can Contain `Profile`, `History`, `My-Account`, `Documents`, `Payment-Details`, `Products-list`.
3. Admin can add multiple Items to site like `Clothes`, `Drinks`, `Electronics`, `Jwellery's` & `Cosmotics`
4. We can able to see Carousel in admin pannel and SearchBar.

## BLOG-PAGE

![BLOG-PAGE](https://github.com/praveen3411/Client-Project/blob/4612afd542e1c06c44121ec3a2b46f0f5f7fa8d0/admin-pannel/src/assets/Blogpage.png)

- Home page is a static page and Responsive page Which contains Navbar and Routes
