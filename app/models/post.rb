class Post < ApplicationRecord
    extend FriendlyId
    friendly_id :title, use: :slugged

    has_rich_text :content
    has_one_attached :banner

    belongs_to :user

    has_many :comments, as: :commentable, dependent: :destroy

    validates_presence_of :title, :content

    def banner_photo
        if self.banner.attached?
            self.banner
        else
            'bill_gates_phrase'
        end
    end
end
