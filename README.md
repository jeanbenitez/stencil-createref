# Stencil CreateRef

This simple code adds the same functionality as React.CreateRef to StencilJS app.

CreateRef facilitates the association of an HTML element within the component.

## Usage

```
npm i stencil-createref
```

```tsx
import { createRef } from 'stencil-createref'

@Component({
    tag: 'my-component',
    styleUrl: 'my-component.css'
})
class MyComponent {
  textInput = createRef<HTMLInputElement>();

  focusTextInput = () => {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```
