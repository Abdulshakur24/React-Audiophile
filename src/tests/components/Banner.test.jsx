import { render, screen } from "@testing-library/react";
import Banner from "../../components/Banner";

test("Expect 'XX99 MARK II HEADPHONE' heading to be in the banner component.", () => {
  render(<Banner />);
  const linkElement = screen.getByText(/XX99 MARK II HEADPHONE/i);
  expect(linkElement).toBeInTheDocument();
});
