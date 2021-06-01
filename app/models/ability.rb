# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    can :show, Post, public: true

    if user.present?  # additional permissions for logged in users (they can read their own posts)
      can :show, Post

      if user.admin?  # additional permissions for administrators
        can [:edit, :update], Post
      end
    end
  end
end
