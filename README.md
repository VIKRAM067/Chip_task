# ChipAutoComplete Component

This project is a React-based user interface component that provides an auto-complete feature with chips for input tags. The functionality includes creating chips, removing chips, and displaying suggestions dynamically as you type, with blue highlights on matching portions. The component is mobile responsive.

## Features

- **Create Chips:** Type in the search box and press enter to create a chip.
- **Remove Chips:** Click the cross icon on a chip to remove it.
- **Avoid Duplicates:** Prevent adding duplicate chips; once a chip is added, it won’t show in the suggestions list.
- **Suggestions Popover:** Display a suggestions popover dynamically as you type, with blue highlights on matching portions.
- **Responsive Design:** The component is mobile responsive.

## Technologies Used

- **React:** For building the user interface.
- **TailwindCSS:** For styling the component.
- **FontAwesome:** For the cross icon in the chips.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/chip-autocomplete.git
    cd chip-autocomplete
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm start
    ```

## Usage

To use the `ChipAutoComplete` component, import and include it in your React application:

```jsx
import React from 'react';
import ChipAutoComplete from './ChipAutoComplete';

const App = () => {
  return (
    <div className="App">
      <ChipAutoComplete />
    </div>
  );
};

export default App;
