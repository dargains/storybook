import { addParameters } from "@storybook/html";

export const globalTypes = {
  xray: {
    name: 'Grid',
    description: 'Grid system',
    defaultValue: false,
    toolbar: {
      icon: 'grid',
      items: ['off', 'on'],
    },
  },
};

addParameters({
  docs: {
    inlineStories: true,
    iframeHeight: '60px',
  },
  backgrounds: {
    values: [
      { name: 'm-01', value: '#E51B15' },
      { name: 'm-02', value: '#222222' },
    ]
  },
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: false,
  },
  viewMode: "docs",
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
