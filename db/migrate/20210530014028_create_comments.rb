class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.belongs_to :commentable, polymorphic: true
      t.string :avatar
      t.string :name
      t.string :email
      t.string :content
      t.timestamps
    end
  end
end
