import jquery from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import jsdom from 'jsdom'
import chai, { expect } from 'chai'
import chaiJquery from 'chai-jquery'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../src/reducers'


// Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView
global.navigator = global.window.navigator
const $ = jquery(global.window)

//set up chai-jquery
chaiJquery(chai, chai.util, $)

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props={}, state={}) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props}/>
    </Provider>
  )

  return $(ReactDOM.findDOMNode(componentInstance)) //produces HTML
}

// build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if(value){
    this.val(value)
  }
  TestUtils.Simulate[eventName](this[0])
}

export { renderComponent, expect }

