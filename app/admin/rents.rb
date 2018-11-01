ActiveAdmin.register Rent do
  permit_params :start_date, :end_date, :book_id, :user_id

  index do
    selectable_column
    id_column
    column :start_date
    column :end_date
    column :book
    column :user
    column :created_at
    column :updated_at
    actions
  end

  filter :start_date
  filter :end_date
  filter :created_at
  filter :updated_at
  filter :book
  filter :user

  form do |f|
    f.inputs do
      f.input :start_date
      f.input :end_date
      f.input :book_id, label: 'Book', as: :select, collection: Book.dropdown_options
      f.input :user_id, label: 'User', as: :select, collection: User.dropdown_options
    end
    f.actions
  end

  show do
    attributes_table do
      row :start_date
      row :end_date
      row :book
      row :user
      row :created_at
      row :updated_at
    end
  end
end
