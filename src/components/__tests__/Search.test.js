import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA)
        },
    });
});


test("Shimmer should load on Homepage", () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    const shimmer = body.getByTestId("shimmer");

    expect(shimmer.children.length).toBe(10);
});

test("Restaurant should load on Homepage", async () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-inpt")));

    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(15);

});

test("Search for string (biryani) on Homepage", async () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-inpt")));

    const searchInpt = body.getByTestId("search-inpt");

    fireEvent.change(searchInpt, {
        target: {
            value: "biryani",
        },
    });

    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(15);
});