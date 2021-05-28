class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.belongs_to :user
      
      t.string :title
      t.string :content
      t.timestamps
    end
  end
end
