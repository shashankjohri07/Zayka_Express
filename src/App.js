import React from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import styled from "styled-components"; // For inline styling
import Header from "./components/Header";
import store from "./Utils/store";
import Home from "./components/Home";
import Search from "./components/Search";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import MenuSearch from "./components/MenuSearch";

// Styled Components for Error Page
const ErrorContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
`;

const ErrorHeading = styled.h1`
  color: #d32f2f;
  font-size: 24px;
`;

const ErrorText = styled.p`
  font-size: 18px;
  color: #444;
`;

const ErrorLink = styled.a`
  color: blue;
  text-decoration: underline;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: darkblue;
  }
`;

// Custom Error Component
const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorHeading>Oops! Something went wrong.</ErrorHeading>
      <ErrorText>Please send your queries to:</ErrorText>
      <ErrorText>📧 <b>shashankjohri07@gmail.com</b></ErrorText>
      <ErrorText>📞 <b>Call on 7505626697</b></ErrorText>
    </ErrorContainer>
  );
};

// Styled Main Layout
const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;

const AppLayout = () => {
  return (
    <Provider store={store}>
      <MainContainer>
        <Header />
        <Outlet />
      </MainContainer>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />, // Error boundary for the main route
    children: [
      { path: "/", element: <Home /> },
      { path: "search", element: <Search /> },
      { path: "profile", element: <SignIn /> },
      { path: "cart", element: <Cart /> },
      { path: "restaurant/:id", element: <RestaurantMenu /> },
      { path: "menusearch/:id", element: <MenuSearch /> },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
