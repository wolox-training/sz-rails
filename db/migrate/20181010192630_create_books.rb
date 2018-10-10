class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :genre
      t.string :autor
      t.string :image
      t.string :title
      t.string :editor
      t.string :year

      t.timestamps
    end
  end
end
