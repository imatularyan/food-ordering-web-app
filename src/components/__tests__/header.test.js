import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {

    // Load the header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    // Check if logo is loaded
    const logo = header.getAllByTestId("logo");

    expect(logo[0].src).toBe("http://localhost/dummy.png");



});
test("Logout button should appear on rendering header", () => {

    // Load the header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    // Check if logout button is working properly
    const logoutStatus = header.getByTestId("logout-status");

    expect(logoutStatus.innerHTML).toBe("Log Out");


});
test("Cart should have 0 items on rendering header", () => {

    // Load the header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    // Check if store is working properly
    const cart = header.getByTestId("cart");

    expect(cart.innerHTML).toBe("0");


});
