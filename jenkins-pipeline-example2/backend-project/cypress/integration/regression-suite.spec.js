/// <reference types="cypress" />
import * as roomHelpers from '../helpers/roomHelpers'

describe('Test suite 1', function(){
    it('test case 1', function(){
        cy.log('Hello, there!')
    })
    it('test case 2', function(){
        cy.log('Hello, there!')
    })
    it('test case 3', function(){
        cy.log('Hello, there!')
    })
     //My testacase
    it('Create and delete a room', function (){
        roomHelpers.createAndDeleteRequestOfRoom(cy)
    })
})