FactoryGirl.define do
  factory :task do
    project nil
    done false
    deadline '2017-05-23'
    title 'MyString'
    position 1
  end
end
