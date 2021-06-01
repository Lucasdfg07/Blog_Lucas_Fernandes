class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one_attached :avatar

  validates_presence_of :name, :email, :description

  enum role: [:admin, :normal]

  def perfil_photo
    if self.avatar.attached?
        self.avatar
    else
        'bill_gates_phrase'
    end
  end
end
