import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../../components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import Header from "../../components/Header";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MENU_DATA)
        },
    });
});


test("Add items to Cart", async () => {

    const menu = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(menu.getByTestId("menu-items")));

    const addBtn = menu.getAllByTestId("addBtn");

    fireEvent.click(addBtn[0]);

    const cart = menu.getByTestId("cart");

    expect(cart.innerHTML).toBe("1");
});