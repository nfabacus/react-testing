import { renderComponent, expect } from '../test_helper' //import all the helper fuctions.
import App from '../../src/components/app'  //import the component we are testing.

// User 'describe' to group together similar tests
describe('App', ()=>{
  let component;
  beforeEach(()=>{
    component= renderComponent(App)
  })
  it('shows a comment box', ()=>{
    expect(component.find('.comment-box')).to.exist
  })

})



