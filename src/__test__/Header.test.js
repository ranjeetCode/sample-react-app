import { render, screen} from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
    it("should render header", () => {
        const { getByTestId } = render(<Header />);
        const header = getByTestId("header-test-id");
        expect(header).toBeTruthy();
    });
    it("should render header title", () => {
        render(<Header />);
        const headerTitle = screen.getByText("Header Component");
        expect(headerTitle).toBeInTheDocument();
    });
    it("should render search bar ", () => {
        const { getByPlaceholderText } = render(<Header />);
        const searchBar = getByPlaceholderText("Search");
        expect(searchBar).toBeTruthy();
    });
    it("should render main nenu", () => {
       render(<Header />);
       const mainMenu = screen.getByRole('list');
       expect(mainMenu).toBeInTheDocument();
       expect(mainMenu).toHaveClass('main-menu');
    });
    it("should render all the five menu items", () => {
        render(<Header />);
        const menuItems = screen.getAllByRole('listitem');
        expect(menuItems.length).toEqual(5);
     });
});