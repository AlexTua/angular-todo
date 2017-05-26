require 'rails_helper'

RSpec.describe Task, type: :model do
  describe "Associations" do
    it { should belong_to(:project) }
  end

  describe "Validations" do
    it { should validate_presence_of(:title) }
  end
end
