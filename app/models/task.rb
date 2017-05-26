class Task < ApplicationRecord
  belongs_to :project
  acts_as_list scope: :project

  validates :title, presence: true
end
