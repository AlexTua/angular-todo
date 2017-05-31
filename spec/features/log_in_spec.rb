require 'rails_helper'

feature 'Log in', js: true do
  given(:user) { create(:user) }

  scenario 'log in as persisted user' do
    visit '/'
    fill_in 'email', with: user.email
    fill_in 'password', with: user.password
    click_button 'Log in'

    expect(page).to have_content 'Log Out'
    expect(page).to have_content 'Add TODO List'
  end
end