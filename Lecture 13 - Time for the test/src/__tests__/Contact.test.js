
import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"

test("Should load contact us component", () => {
    render(<Contact/>)

    const heading = screen.getByRole("heading");
// check whether the heading is in the document or not 
    expect(heading).toBeInTheDocument(); // we use this function to check the document is  loaded or not
})