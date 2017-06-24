@Component({
  selector: 'nested-component',
  template:  `
    <div>
      <input id="nestedInput" type="text"/>
    </div>
  `
})
class NestedComponent {}

@Component({
  selector: 'parent-component',
  template: `
    <div>
      <nested-component></nested-component>
    </div>
  `
})
class ParentComponent {
  
  onBlur() {
    console.log('The user navigated away from the input box');
  }

}
