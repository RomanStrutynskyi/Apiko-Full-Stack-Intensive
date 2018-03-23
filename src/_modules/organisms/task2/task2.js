export default {
  id: {
    root: 'root'
  },
  React: {
    createElement(tag, props = {}, children = false) {
      const item = document.createElement(tag);
      const keys = Object.keys(props === null ? {} : props);

      if (keys.length)
        keys.forEach(key => {
          if (key == 'style') {
            typeof props[key] === 'string'
              ? item[key] = props[key]
              : Object.keys(props[key]).forEach(style => item.style[style] = props.style[style]);
          } else {
            item[key] = props[key]
          }
        });

      const append = child => typeof child === 'string'
        ? item.appendChild(document.createTextNode(child))
        : item.appendChild(child);

      if (children)
        [].concat(children).forEach(child => append(child))
      return item
    },
    render(component, container) {
      container.appendChild(component);
    }
  },
  init() {
    const app =
      this.React.createElement('div', { style: { backgroundColor: 'red' } }, [
        this.React.createElement('span', undefined, 'Hello world'),
        this.React.createElement('br'),
        'This is just a text node',
        this.React.createElement('div', { textContent: 'Text content' }),
      ]);
    this.React.render(
      app,
      document.getElementById(this.id.root)
    );
  }

}