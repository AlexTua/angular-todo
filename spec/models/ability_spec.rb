require 'rails_helper'

RSpec.describe Ability, type: :model do
  subject(:ability) { Ability.new(user) }
  let(:user) { create(:user) }
  let(:project) { create(:project, user: user) }
  let(:task) { create(:task, project: project) }

  context "when user has access" do
    it { should be_able_to(:manage, project) }
    it { should be_able_to(:manage, task) }
  end

  context "when user doesn't have access" do
    it { should_not be_able_to(:manage, create(:project)) }
    it { should_not be_able_to(:manage, create(:task)) }
  end
end