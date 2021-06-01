# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    can :show, Post, public: true

    if user.present? && user.admin?
        can :manage, :all
    end
  end
end
