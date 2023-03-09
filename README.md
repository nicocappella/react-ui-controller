# Readme

# Introduction

This document provides an overview of React UI Controller, a JavaScript library for building user interfaces based in Material UI.

It provides lots of UI components to build a complex Web Application.

## Installation

To install React UI Cotntroller, run the following command:

```
npm install react-ui-controller
```

## Usage

To use React UI Cotntroller, first import it into your React app.js file:

```
import { Button } from 'react-ui-controller';

```

Then, you can use the library to build UI components. For example:

```
import React from 'react'
import { Button } from 'react-ui-controller';

export const RUIButton = () => {
  return (
    <Button type="button variant="contained" handleClick={() => {}) text="Button" />
    )
}
```

## Components

{UI Library Name} provides the following components:

-   Button
-   Input
-   Checkbox
-   Radio Button
-   Dropdown

Each component has its own set of options and methods. Please refer to the documentation for more information.

## Styling

React UI Controller comes with default styling, but you can also customize the look and feel by adding your own CSS.

## Development

To contribute to React UI Controller, first clone the repository:

```
git clone https://github.com/nicocappella/react-ui-controller.git

```

Then, install the dependencies:

```
npm install

```

To run storybook to visualize de UI components:

```
npm run storybook
```

To run the tests:

```
npm run test

```

To build the library:

```
npm run build

```

## Conclusion

Thank you for considering React UI Controller for your UI needs. For more information, please refer to the documentation.
