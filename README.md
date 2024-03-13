## Namaste React Live course 🚀 by Akshay saini

# Food Ordering Web App

## Introduction

The Food Ordering Web App is an interactive application that allows users to search and select their favorite foods or restaurants. It displays all available cuisines, dishes, and foods served by a selected restaurant, enabling customers to manage their orders effectively. This app also features a cart section where users can add and remove food quantities. User login functionality is under development to offer a more personalized experience.

## Features

- **Search Functionality:** Enables users to search for their preferred restaurants and foods.
- **Cuisine and Dish Display:** Showcases all cuisines and dishes available from a selected restaurant.
- **Cart Management:** Allows users to add or remove items in their cart and see updates in real-time.
- **User Login:** (In Development) To provide users with a personalized ordering experience.

## Technologies

- **Front-end:** React, React-DOM, React-Redux, React Router DOM, TailwindCSS, Formik
- **State Management:** ReduxJS/Toolkit, React Hooks, UserContext API
- **Development Tools:** Babel (Core, Preset-Env, Preset-React), Parcel, Jest, @testing-library/react, PostCSS
- **Techniques:** Custom Hooks, Lazy Loading, Chunking, Prop Drilling
- **APIs:** Swiggy API (Assumed for demonstration purposes)

## CORS Policy

The app might face Cross-Origin Resource Sharing (CORS) issues when interacting with external APIs due to browser security measures. During development, ensure the backend server is configured to include appropriate CORS headers. For production, configure the server to allow requests from your domain.

## Project Structure

```
/food-ordering-web-app
├── .parcel-cache/
├── dist/
├── node_modules/
├── src/
│   ├── assets/
│   │   └── img/            # All images used in the app
│   ├── components/         # React components
│   │   ├── __tests__/      # Test cases for components
│   │   ├── About.js
│   │   ├── Body.js
│   │   ├── Cart.js
│   │   ├── Contact.js
│   │   ├── Error.js
│   │   ├── FoodItem.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Help.js
│   │   ├── Modal.js
│   │   ├── ProfileClass.js
│   │   ├── RestaurantCard.js
│   │   ├── RestaurantMenu.js
│   │   ├── Shimmer.js
│   │   ├── ShimmerMenu.js
│   ├── mocks/              # Mock data
│   │   ├── data.js
│   │   ├── dummyLogo.js
│   ├── utils/              # Utilities and custom hooks
│   │   ├── cartSlice.js
│   │   ├── help.js
│   │   ├── store.js
│   │   ├── useOnline.js
│   │   ├── UserContext.js
│   │   ├── useRestaurant.js
│   ├── App.js
│   ├── constants.js
├── .babelrc
├── .gitignore
├── .postcssrc
├── index.css
├── index.html
├── jest.config.js
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```

## Installation

1. **Clone the repository**

```sh
git clone https://github.com/imatularyan/food-ordering-web-app.git
cd food-ordering-web-app
```

2. **Install dependencies**

```sh
npm install
```

3. **Start the development server**

```sh
npm start
```

The server will run on `http://localhost:1234` by default.

## Usage

After launching the server, access the app at `http://localhost:1234`. Here, you can explore restaurants, manage your orders in the cart, and more.

## Contributing

Contributions are welcome! Please follow this workflow for contributions:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is open source and available under the [MIT License](LICENSE.md).
