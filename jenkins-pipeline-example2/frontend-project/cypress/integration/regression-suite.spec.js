/// <reference types="cypress" />

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
    //My test case
    it('Login and create a new room and delete it', function(){
        cy.visit('http://localhost:3000')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get('h2 > .btn').click()
        cy.contains('New Room')
        cy.get(':nth-child(1) > select').select('Double')
        cy.get(':nth-child(2) > input').type('201')
        cy.get(':nth-child(3) > input').type('3')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('2500')
        cy.get('[value="sea_view"]').click()
        cy.get('.blue').click()
        cy.contains('Floor 3, Room 201')
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.get('.user > .btn').click()
        cy.contains('Login')



    })