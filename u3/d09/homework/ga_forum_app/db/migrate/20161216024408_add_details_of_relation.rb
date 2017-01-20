class AddDetailsOfRelation < ActiveRecord::Migration[5.0]
  def change
    add_reference :users, :course, index: true
    add_reference :topics, :user, index: true
    add_reference :comments, :user, index: true
    add_reference :comments, :topic, index: true
  end
end
