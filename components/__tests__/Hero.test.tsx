import { render, screen } from "@testing-library/react";
import Hero from "../sections/Hero";

describe("Hero Section", () => {
  it("renders the developer name", () => {
    render(<Hero />);
    expect(screen.getByText("Aaliyah Momodu")).toBeInTheDocument();
  });

  it("renders the job title", () => {
    render(<Hero />);
    expect(
      screen.getByText("Mid-Level Frontend Developer")
    ).toBeInTheDocument();
  });

  it("renders the location", () => {
    render(<Hero />);
    expect(screen.getByText("Paris, France")).toBeInTheDocument();
  });

  it("has accessible social links", () => {
    render(<Hero />);
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("has navigation links", () => {
    render(<Hero />);
    expect(screen.getByText("View Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact Me")).toBeInTheDocument();
  });
});
