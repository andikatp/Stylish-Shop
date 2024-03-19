# 💅🏻 Stylish Shop

A fashion shop created from scratch, from backend using Postgre, Node.JS, and more, CMS using react, and client using flutter with GetX pattern.
 
## Mobile UI
<img src="https://github.com/andikatp/stylish-shop/blob/main/img/flutter.jpg" width="1000"/>

## CMS UI
<table >
  <tr >
    <td align="center"><img src="https://github.com/andikatp/stylish-shop/blob/main/img/1.png" height="200" /></td>
    <td align="center"><img src="https://github.com/andikatp/stylish-shop/blob/main/img/2.png" height="200" /></td>
  </tr>
   <tr >
    <td align="center"><img src="https://github.com/andikatp/stylish-shop/blob/main/img/3.png" height="200" /></td>
    <td align="center"><img src="https://github.com/andikatp/stylish-shop/blob/main/img/4.png" height="200" /></td>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/andikatp/stylish-shop/blob/main/img/5.png" height="200" /></td>
    <td align="center"><img src="https://github.com/andikatp/stylish-shop/blob/main/img/6.png" height="200" /></td>
  </tr>
</table>

## 🎉 Features
### Customer App:
**User Authentication:**
- Login with email and password
- Register new accounts
- Social Sign-In with Google

**User Profile Management:**
- Update profile information
- Change password
- View order history

**Product Management:**
- Browse products by category
- Search for products
- View product details
- Add products to cart
- Add quantity
- Add color of product/s
  
**Cart Management:**
- View shopping cart
- Update quantity of items in the cart
- Remove items from the cart
- Calculate total price of items in the cart
- Empty cart
  
**Checkout Process:**
- Proceed to checkout from the cart
- Enter shipping address
- Select payment method
- Review order summary
- Confirm order
  
**Payment Integration:**
- Secure payment gateway integration using Midtrans
- Process payments using various methods (credit/debit cards, e-wallets, bank transfer)
  
**Order Management:**
- View order status
- Track order delivery
- Cancel orders (within a certain timeframe)

**Contact customer support:**
- FAQs section
- Term and Conditions
  
**Security:**
- Secure authentication and data transmission (HTTPS)

### CMS App:
**Admin Authentication:** Only Admin can login cms<br>
**Product Management:** CRUD product<br>
**Brand Management:** CRUD brand<br>
**Category Management:** CRUD product<br>
**Transaction Checker:** Access and read all transactions<br>
**Admin Creator:** Able to create another admin<br>

## 🏗️ Architecture

The project follows the principles of GetX Architecture, emphasizing simplicity, performance, and scalability. It is structured into distinct layers, including:

View Layer: User interfaces and components built with Flutter, managed by GetX controllers.
Logic Layer: Contains business logic, state management, and navigation, implemented using GetX controllers and services.
Data Layer: Manages data sources, repositories, and external services, integrated with GetX reactive state management.

## 🧪 Testing

The project adopts a Test-Driven Development (TDD) approach to ensure code reliability and maintainability. Unit tests, integration tests, and widget tests are utilized to cover various aspects of the application.

## 🛠️ Built With

### Flutter
- **[CachedNetworkImage](https://pub.dev/packages/cached_network_image)**: Caching network images for improved performance.
- **[dio](https://pub.dev/packages/dio)**: HTTP client for making network requests.
- **[firebaseAuth](https://pub.dev/packages/firebase_auth)**: Firebase authentication for Flutter apps.
- **[firebaseCore](https://pub.dev/packages/firebase_core)**: Firebase core functionality for Flutter.
- **[FlutterKeyboardVisibility](https://pub.dev/packages/flutter_keyboard_visibility):** Detecting keyboard visibility in Flutter.
- **[FlutterScreenUtils](https://pub.dev/packages/flutter_screenutil):** Streamlining screen adaptation across different sizes.
- **[FlutterSlidable](https://pub.dev/packages/flutter_slidable):** Slidable widgets for Flutter.
- **[Get](https://pub.dev/packages/get):** State management solution for Flutter.
- **[GoogleFonts](https://pub.dev/packages/google_fonts):** Custom fonts from the Google Fonts library.
- **[GetStorage](https://pub.dev/packages/get_storage):** Persistent storage solution using key-value pairs.
- **[GoogleSignIn](https://pub.dev/packages/google_sign_in):** Google sign-in integration for Flutter apps.
- **[ImagePicker](https://pub.dev/packages/image_picker)**: Image picker for selecting images from the device.
- **[Intl](https://pub.dev/packages/intl)**: Image picker for selecting images from the device.
- **[jsonAnotation](https://pub.dev/packages/json_anotation)**: JSON serialization and deserialization for Dart.
- **[LiquidPullToRefresh](https://pub.dev/packages/liquid_pull_to_refresh)**: Pull-to-refresh widget for Flutter.
- **[Lottie](https://pub.dev/packages/lottie)**: Lottie animations for Flutter.
- **[PrettyDioLogger](https://pub.dev/packages/pretty_dio_logger)**: Pretty logging for Dio HTTP client.
- **[Shimmer](https://pub.dev/packages/shimmer)**: Shimmer effect for loading content placeholders.
- **[SmoothPageIndicator](https://pub.dev/packages/smooth_page_indicator)**: Smooth page indicators for PageView.
- **[WebviewFlutter](https://pub.dev/packages/webview_flutter)**: WebView widget for displaying web content in Flutter.

### CMS
- **[@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)**: State management library for React applications.
- **[axios](https://www.npmjs.com/package/axios)**: Promise-based HTTP client for the browser and Node.js.
- **[chart.js](https://www.npmjs.com/package/chart.js)**: JavaScript charting library for creating interactive charts.
- **[intl](https://www.npmjs.com/package/intl)**: Internationalization and localization support for JavaScript.
- **[react](https://react.dev/)**: JavaScript library for building user interfaces.
- **[react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)**: React wrapper for Chart.js to create charts in React.
- **[react-dom](https://www.npmjs.com/package/react-dom)**: Entry point to the DOM and server renderers for React.
- **[react-icons](https://www.npmjs.com/package/react-icons)**: Library for popular icons in React applications.
- **[react-redux](https://www.npmjs.com/package/react-redux)**: Official React bindings for Redux.
- **[react-router-dom](https://reactrouter.com/en/main)**: DOM bindings for React Router.
- **[react-scripts](https://www.npmjs.com/package/react-scripts)**: Configuration and scripts for Create React App.
- **[sweetalert2](https://www.npmjs.com/package/sweetalert2)**: Library for beautiful, responsive, and customizable alerts.
- **[vercel](https://vercel.com/)**: Frontend Cloud. Build, scale, and secure a faster, personalized web.

### Backend
- **[@googleCloud/storage](https://www.npmjs.com/package/@google-cloud/storage)**: Cloud storage service provided by Google Cloud.
- **[bcrypt](https://www.npmjs.com/package/bcrypt)**: Library for hashing passwords.
- **[cors](https://www.npmjs.com/package/cors)**: Middleware for handling Cross-Origin Resource Sharing (CORS) in Express.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Module for loading environment variables from a .env file.
- **[express](https://www.npmjs.com/package/express)**: Fast, unopinionated, minimalist web framework for Node.js.
- **[firebase](https://www.npmjs.com/package/firebase)**: SDK for Firebase services such as Cloud Firestore, Authentication, etc.
- **[firebase-admin](https://www.npmjs.com/package/firebase-admin)**: Firebase Admin SDK for managing Firebase services from privileged environments.
- **[google-auth-library](https://www.npmjs.com/package/google-auth-library)**: Google's officially supported Node.js client library for OAuth 2.0.
- **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**: Library for generating and verifying JSON Web Tokens (JWT).
- **[midtrans-client](https://www.npmjs.com/package/midtrans-client)**: Client library for Midtrans, an online payment gateway.
- **[multer](https://www.npmjs.com/package/multer)**: Middleware for handling multipart/form-data, used for file uploads.
- **[pg](https://www.npmjs.com/package/pg)**: PostgreSQL client for Node.js.
- **[sequelize](https://www.npmjs.com/package/sequelize)**: Promise-based Node.js ORM for PostgreSQL, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- **[swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)**: Middleware for serving Swagger UI generated by Swagger tools.
- **[vercel](https://vercel.com/)**: Frontend Cloud. Build, scale, and secure a faster, personalized web.

### Server
- **[Postgres](https://www.postgresql.org/)**: Powerful, open source object-relational database system with over 35 years of active development.
- **[DBeaver](https://dbeaver.io/)**: Cross-platform database tool for developers, database administrators, analysts, and everyone working with data.

# DEMO
- *On Progress Recording...*

### Feel free to explore and contribute to make this project even better! 🚀
