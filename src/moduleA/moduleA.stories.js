import './moduleA.css'
import './moduleA.js'

export default {
  title: 'Components/Module A',
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    description: {
      control: { type: 'text' }
    },
    titleColor: {
      control: {
        type: 'select',
        description: 'black | red | blue',
        options: ['black', 'red', 'blue']
      }
    }
  }
};

export const Playground = args => `
  <section class="moduleA">
    <h1 style="color: ${args.titleColor}" class="moduleA__title">${args.title}</h1>
    <p>${args.description}</p>
  </section>
`

Playground.args = {
  title: 'Module title',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur vitae architecto nihil perspiciatis quisquam voluptatem voluptates dolorum temporibus consectetur reiciendis?',
  titleColor: 'black'
}