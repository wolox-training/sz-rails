ActiveAdmin.register BookSuggestion do
  permit_params :synopsis, :price, :author, :title, :link, :publisher, :year, :user_id

  index do
    selectable_column
    id_column
    column :title
    column :author
    column :year
    column :publisher
    column :user
    column :created_at
    column :updated_at
    actions
  end

  filter :title
  filter :author
  filter :year
  filter :publisher
  filter :created_at
  filter :updated_at
  filter :user

  form do |f|
    f.inputs do
      f.input :synopsis
      f.input :price
      f.input :author
      f.input :title
      f.input :link
      f.input :publisher
      f.input :year
      f.input :user_id, label: 'User', as: :select, collection: User.order_by_email
    end
    f.actions
  end

  show do
    attributes_table do
      row :synopsis
      row :price
      row :author
      row :title
      row :link
      row :publisher
      row :year
      row :user
      row :created_at
      row :updated_at
    end
  end
end
