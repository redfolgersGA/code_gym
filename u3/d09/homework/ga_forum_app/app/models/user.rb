class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true

  belongs_to :course
  has_many :comments
  has_many :topics
end
