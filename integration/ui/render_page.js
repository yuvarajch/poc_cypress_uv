/// <reference types="Cypress" />

context('Files', () => {
  beforeEach(() => {
    cy.visit('{URL}')
    cy.get('#credit-card-pseudo-radio').click()
  })

  it('Payment Section', () => {
    cy.get('#how-to-pay-header').contains("How do you want to pay?")
  })

  it('Payment Options', () => {
    cy.get('h3').contains("Select a payment option")
    cy.get('.input-control-container > label').contains("Credit card")
    cy.get('#mastercard-image').should('be.visible')
    cy.get('#visa-image').should('be.visible')
    cy.get('#american-express-image').should('be.visible')
    cy.get('#discover-image').should('be.visible')
    cy.get('#uatp-image').should('be.visible')
    cy.get('#diners-club-image').should('be.visible')
    cy.get('#jcb-image').should('be.visible')
    cy.get('#unionpay-image').should('be.visible')
  })

  it('Credit Card Type Field', () => {
    cy.get('#credit-card-number-label')
      .contains('Card number')
    cy.get('#credit-card-number-label > .icon-required')
      .should('be.visible')
  })

  it('Country/Region Field', () => {
    cy.get('#country-region-label')
      .contains('Country / region')
    cy.get('#country-region-label > .icon-required')
      .should('be.visible')
  })

  it('Month Field', () => {
    cy.get('#expiration-month-label')
      .contains('Month')
    cy.get('#expiration-month-label > .icon-required')
      .should('be.visible')
    cy.get('#expiration-month-select')
      .contains('Select month').should('be.visible')
  })

  it('Year Field', () => {
    cy.get('#expiration-year-label')
      .contains('Year')
    cy.get('#expiration-year-label > .icon-required')
      .should('be.visible')
    cy.get('#expiration-year-select')
      .contains('Select year').should('be.visible')
  })

  it('Security Code Field', () => {
    cy.get('#cvv-label')
      .contains('Security code (CVV) ')
    cy.get('#cvv-label > .icon-required')
      .should('be.visible')
  })

  it('Address1 Field', () => {
    cy.get('#address-1-label')
      .contains('Address 1 ')
    cy.get('#address-1-label > .icon-required')
      .should('be.visible')
  })

  it('Address2 Field', () => {
    cy.get('#address-2-label')
      .contains('Address 2 ')
  })

  it('First Name Field', () => {
    cy.get('#first-name-label')
      .contains('First name ')
    cy.get('#first-name-label > .icon-required')
      .should('be.visible')
  })

  it('Middle Name Field', () => {
    cy.get('#middle-name-label')
      .contains('Middle name ')
  })

  it('Last Name Field', () => {
    cy.get('#last-name-label')
      .contains('Last name ')
    cy.get('#last-name-label > .icon-required')
      .should('be.visible')
  })

  it('City Field', () => {
    cy.get('#city-label')
      .contains('City ')
    cy.get('#city-label > .icon-required')
      .should('be.visible')
  })

  it('State Field', () => {
    cy.get('#state-label')
      .contains('State ')
    cy.get('#state-label > .icon-required')
      .should('be.visible')
    cy.get('#state-select').contains('Select a State').should('be.visible')
  })

  it('Postal Code Field', () => {
    cy.get('#postal-code-label')
      .contains('Postal code ')
    cy.get('#postal-code-label > .icon-required')
      .should('be.visible')
  })

  it('Email Section', () => {
    cy.get('#email-receipt-header').contains('Email for receipt')
    cy.get('#email-receipt-section > .large-12').contains('Required')
  })

  it('Primary Email Field', () => {
    cy.get('#primary-email-label')
      .contains('Primary email ')
    cy.get('#primary-email-label > .icon-required')
      .should('be.visible')
  })

  it('Confirm Primary Email Field', () => {
    cy.get('#confirm-primary-email-label')
      .contains('Confirm primary email')
    cy.get('#confirm-primary-email-label > .icon-required')
      .should('be.visible')
  })



  it('Merchant Message Section', () => {
    cy.get('#merchant-message-section')
      .contains(' is a U.S. merchant. Your bank may apply conversion or foreign transaction fees.')
  })

  it('Terms and Conditions Section', () => {
    cy.get('#terms-and-conditions-section')
      .contains('I agree to the')
    cy.get('#terms-and-conditions-section > span:nth-child(2) > a:nth-child(1)')
      .should('have.attr', 'href', '{URL})

    cy.get('#terms-and-conditions-section > span:nth-child(2) > a:nth-child(3)')
      .should('have.attr', 'href', '{URL}')

    cy.get('#terms-and-conditions-section > span:nth-child(2) > span:nth-child(4)')
      .contains('and')

    cy.get('#terms-and-conditions-section > span:nth-child(2) > span:nth-child(4) > a')
      .should('have.attr', 'href', '{URL}')
  })

})