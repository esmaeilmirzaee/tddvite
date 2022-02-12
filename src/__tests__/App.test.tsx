/**
 * @jest-environment jsdom
 */
import {render, screen} from '@testing-library/react'

import App from "../App";

describe('just a test', () => {
    beforeEach(() => {
        render(<App/>);
    })

    test('test true with true', () => {
        let el = screen.getByText(/Hello Vite/i)
        expect(el).toBeInTheDocument()
    })
})