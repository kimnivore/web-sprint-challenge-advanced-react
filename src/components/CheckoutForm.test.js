import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const first = screen.getByLabelText(/first name:/i);
    const last = screen.getByLabelText(/last name:/i);
    const address = screen.getByLabelText(/address:/i);
    const city = screen.getByLabelText(/city:/i);
    const state = screen.getByLabelText(/state:/i);
    const zip = screen.getByLabelText(/zip:/i);
    const button = screen.getByRole('button');
    userEvent.type(first, 'kim');
    userEvent.type(last, 'nguyen');
    userEvent.type(address, '123 main st.');
    userEvent.type(city, 'san francisco');
    userEvent.type(state, 'CA');
    userEvent.type(zip, '94121');
    userEvent.click(button);

    await waitFor(() => {
        const nameDisplay = screen.queryByText('kim nguyen');
        const addressDisplay = screen.queryByText('123 main st.');
        const cityDisplay = screen.queryByText('san francisco, CA 94121');
        const message = screen.queryByTestId('successMessage');
        
        expect(nameDisplay).toBeInTheDocument();
        expect(addressDisplay).toBeInTheDocument();
        expect(cityDisplay).toBeInTheDocument();
        expect(message).toBeInTheDocument();
    })
});
