class Course < ApplicationRecord
  validates :course_name, presence: true
  validates :class_name, presence: true

  has_many :users
end
