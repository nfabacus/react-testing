import { expect } from '../test_helper'
import CommentsReducer from '../../src/reducers/comments'
import { SAVE_COMMENT } from '../../src/actions/types'

describe('CommentsReducer', ()=>{
  it('handles action with unknown type', ()=>{
    expect(CommentsReducer(undefined, {})).to.be.eql([])
  })

  it('handles action of type SAVE_COMMENT', ()=>{
    const action = { type: SAVE_COMMENT, payload: 'new comment'}
    expect(CommentsReducer([], action)).to.eql(['new comment'])
  })
})