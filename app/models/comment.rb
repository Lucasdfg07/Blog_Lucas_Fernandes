class Comment < ApplicationRecord
    before_save :set_avatar

    belongs_to :commentable, polymorphic: true
    has_many :comments, as: :commentable, dependent: :destroy
    
    validates_presence_of :name, :email, :content

    def set_avatar
        self.avatar = [:bill, :dog, :doge, :elon, :mark, :mark_2, :steve, :steve_2, :steve_3].sample
    end
end
