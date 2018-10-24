class RentSerializer < ActiveModel::Serializer
  attributes :start_date, :end_date
  belongs_to :book, serializer: BookIndexSerializer
  belongs_to :user
end
