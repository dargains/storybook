export default {
  title: 'Components/Module B',
  argTypes: {
    title: {
      control: { type: 'text'}
    },
    disabled: {
      control: { type: 'boolean'}
    },
    items: {
      control: { type: 'array' }
    }
  }
}

const Template = ({title, disabled, items}) => `
<section>
  <p style="color: ${disabled ? 'gray' : 'black'}">${title}</p>
  <ul>
    ${items.map(item => '<li>' + item + '</li>').join('')}
  </ul>
</section>
`

export const WithText = Template.bind({})
WithText.args = {
  title: 'Cenas',
  disabled: false,
  items: ['item 1', 'item 2']
}

export const WithoutText = Template.bind({})
WithoutText.args = {
  title: 'a',
  disabled: true
}