import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'
import Button from "./Button";
import React from 'react'

describe("Running Test for Marbella Button", () => {

  test("Check Button Disabled", () => {
    render(<Button/>)
    expect(screen.getByRole('button',{name:"Button marbella"}));
  });
});
