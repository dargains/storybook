import './moduleA.css'
import './moduleA.js'
export default {
  title: 'Module A',
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    description: {
      control: { type: 'text' }
    },
  }
};

export const Playground = args => `
  <section>
    <h1>${args.title}</h1>
    <p>${args.description}</p>
  </section>
`

Playground.args = {
  title: 'Module title',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur vitae architecto nihil perspiciatis quisquam voluptatem voluptates dolorum temporibus consectetur reiciendis?'
}