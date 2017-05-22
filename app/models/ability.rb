class Ability
  include CanCan::Ability

  def initialize(user)
    can :manage, Project, user_id: user.id
  end
end
