class CreateRents < ActiveRecord::Migration[5.2]
  def change
    create_table :rents do |t|
      t.references :user, foreign_key: true
      t.references :book, foreign_key: true
      t.date :start_rent_date
      t.date :end_rent_date

      t.timestamps
    end
  end
end
