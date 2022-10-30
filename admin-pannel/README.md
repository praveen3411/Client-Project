# CLIENT-PROJECT-REQRUIRMENT

Simple E-commerce-site & Admin-Pannel Build using React.js, Redux & more Libraries.
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

## Code TransFrom

**Steps To UnderStand Code**

1. App.js File

- App is wrapped with AllRoutes Components & Meterial Ui
- AllRoutes Components will Accect all components and makes a single page Application

2. Routes Folder

- Route Foder contains Two pages
  - AllRoutes.jsx Which will accepts all the components and also it takes `Nav.jsx` wrapped to Routes for providing each and every page. and these will take `app.js` page.
  - Nav.jsx will import's the `ResponsiveNavbar.jsx` from `../Features/NavbarComponent`.

3. Resuable Folder

- Resuable Folder contains Two Files
  - `Error.jsx` is a error file which will through's a error when user does't exists.
  - `ResuableNavbar.jsx` contains Array of Route Links & Some of Data was exported.

4. Redux Folder

- Redux Contains UserData to Manage the State.
  - `store.jsx` which can contains the Store which wraps all the data into it. Whenever Dispatch will dispacth a action it will move to reducers and got to centralized store and it will trigger and update's to view
  - `store.jsx` has Redux-Thunk will will retun a function instead of plain action object and perfroms the API's Calls.
- UserAuth Contains Theree Files

  - `Auth.action.types.js` which will declares the types for actions
  - `Auth.reudcer.js` which will perform the state management based on action's and updates to store
  - `Auth.action.js` which will retrun a API's calls and payload to reducer's and reducer will take and update's to store, Store will updates to subscriber, subscriber will updates to View model

5. Private Folder

- Private Folder having one Protected Router || Middleware
  - `ProtectedRoute.jsx` will protect based on the given logic once the logic is successful it will redirect to that particular pages till that time it is in `unmount` Phase

6. Features Folder

- Features Folder contains These Components

  - `NavbarComponent.jsx` Which is having Whole-Navbar-Page-Code and export to Components Folder.
  - `DashBoard.jsx`Which is having Whole-DashBoard-Page-Code and export to Components Folder.
  - `Slider.jsx` Which is having Whole-Slider-Page-Code and export to Components Folder.
  - `SearchBar.jsx` which is implementd and map to particualr Data and take's one more component `SearBarLogic.jsx`
  - `ProductsData.jsx` having card and `props` and exports to Components Folder

7. Css Folder

- Css Folder contains Two Files
  - `Dashboard.css` Develops css proprities for `DashBoard.jsx` Page
  - `Navbar.css` Develops css proprities for `Navbar.jsx` Page

8. Components Folder

- Components Folder Contains These Components
  - `Home.jsx` page contains Home Content.
  - `Product.jsx` Page fetches the data from Api and takes a `Productsdaa.jsx` component card to map and display data.
  - `Login.jsx` Page contains Dispacther To dispatch and action using `useSelector,useDispatch` and based on logic it will perform.
  - `Dashboard.jsx` will takes the component from `../Features/Dashboard` and displays the data.
  - `Blog.jsx`page contains Blog Content.
  - `PageNotfound.jsx` will gives the pagenot found page, when you are trying to access unknown page.

9. Assets Folder

- Assests Folder Contains Images

----------------------------------------------**💫 END 💫**------------------------------------------
