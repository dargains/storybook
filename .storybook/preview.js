import { addParameters } from "@storybook/html";

addParameters({
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: false,
  },
  viewport: {
    viewports: {
      sm: {
        name: "Breakpoint: Mobile",
        styles: {
          width: "512px",
          height: "90vh"
        }
      },
      md: {
        name: "Breakpoint: Phablet",
        styles: {
          width: "768px",
          height: "90vh"
        }
      },
      lg: {
        name: "Breakpoint: Tablet",
        styles: {
          width: "1024px",
          height: "90vh"
        }
      },
      xl: {
        name: "Breakpoint: Desktop",
        styles: {
          width: "1440px",
          height: "90vh"
        }
      }
    }
  }
});
