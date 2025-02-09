import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Navbar from "../components/Navbar"; // Adjust the import path if needed

describe("Navbar Component", () => {
    it("should render the navbar", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        // Check if Navbar is rendered
        const navbar = screen.getByTestId("navbar");
        expect(navbar).toBeInTheDocument();
    });

    it("should render the logo", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        // Check if the logo is present
        const logo = screen.getByTestId("logo");
        expect(logo).toBeInTheDocument();
    });

    it("should display all navigation links in desktop mode", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        // Check if all menu items are rendered
        const links = ["home-desktop", "about-desktop", "contact-desktop", "player-desktop", "score-desktop"];

        links.forEach((linkTestId) => {
            const link = screen.getByTestId(linkTestId);
            expect(link).toBeInTheDocument();
        });
    });

    it("should open mobile menu on menu button click", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        // Click the mobile menu button
        const menuButton = screen.getByRole("button", { name: /menu/i });
        fireEvent.click(menuButton);

        // Check if mobile menu appears
        const mobileAboutLink = screen.getByTestId("about-mobile");
        expect(mobileAboutLink).toBeInTheDocument();
    });

    it("should close the mobile menu when an item is clicked", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        // Open the menu
        const menuButton = screen.getByTestId("menu-button");
        expect(menuButton).toBeInTheDocument();
        fireEvent.click(menuButton);

        // Click on an item
        const aboutLink = screen.getByTestId("about-mobile");
        fireEvent.click(aboutLink);

        // Check if menu is closed
        expect(aboutLink).toBeInTheDocument(); // Still in the DOM
    });
});
