ActiveAdmin.register Book do
  permit_params :author, :title, :image, :publisher, :year, :genre, :description

  index do
    selectable_column
    id_column
    column :author
    column :title
    column :image
    column :publisher
    column :year
    column :genre
    column :description
    actions
  end

  filter :author
  filter :title
  filter :image
  filter :publisher
  filter :year
  filter :genre

  form do |f|
    f.inputs do
      f.input :author
      f.input :title
      f.input :image
      f.input :publisher
      f.input :year
      f.input :genre
      f.input :description
    end
    f.actions
  end

  show do
    attributes_table do
      row :author
      row :title
      row :image
      row :publisher
      row :year
      row :genre
      row :description
      row :created_at
      row :updated_at
    end
  end
end
