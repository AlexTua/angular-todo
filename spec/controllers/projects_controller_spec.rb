require 'rails_helper'

RSpec.describe ProjectsController, type: :controller do
  describe 'GET #index' do
    before do
      allow(controller).to receive(:current_user).and_return(user)
      get :index
    end
  end
end
