import { renderComponent, expect } from '../test_helper' //import all the helper fuctions.
import App from '../../src/components/app'  //import the component we are testing.

// User 'describe' to group together similar tests
describe('App', ()=>{

  // Use 'it' to test a single attribute of a target
  it('shows the correct text',()=>{
    // create an instance of App
    const component = renderComponent(App)
    // User 'expect' to make an 'assertion' about a target
    expect(component).to.contain('React simple starter')
  })

})



