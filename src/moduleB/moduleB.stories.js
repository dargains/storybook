export default {
  title: 'Components/Module B',
  argTypes: {
    title: {
      control: { type: 'text'}
    },
    disabled: {
      control: { type: 'boolean'}
    }
  }
}

const Template = ({title, disabled}) => `
  <p style="color: ${disabled ? 'gray' : 'black'}">${title}</p>
`

export const WithText = Template.bind({})
WithText.args = {
  title: 'Cenas',
  disabled: false
}

export const WithoutText = Template.bind({})
WithoutText.args = {
  title: 'a',
  disabled: true
}