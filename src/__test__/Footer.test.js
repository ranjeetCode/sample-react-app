import { render, screen} from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer component", () => {
    it("should render Footer", () => {
        const { getByTestId } = render(<Footer />);
        const footer = getByTestId("footer-test-id");
        expect(footer).toBeTruthy();
    });
    it("should render footer title", () => {
        render(<Footer />);
        const footerTitle = screen.getByText("Footer Component");
        expect(footerTitle).toBeInTheDocument();
    });
    it("should render footer menu items", () => {
        render(<Footer />);
        const footerMenu = screen.getByRole('list');
        expect(footerMenu).toBeInTheDocument();
        expect(footerMenu).toHaveClass('footer-menu');
     });
     it("should render all the five menu items", () => {
        render(<Footer />);
        const menuItems = screen.getAllByRole('listitem');
        expect(menuItems.length).toEqual(5);
     });
});