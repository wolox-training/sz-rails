ActiveAdmin.register User do
  permit_params :email, :password, :password_confirmation, :first_name, :last_name, :locale

  index do
    selectable_column
    id_column
    column :email
    column :first_name
    column :last_name
    column :locale
    actions
  end

  filter :email
  filter :first_name
  filter :last_name
  filter :locale

  form do |f|
    f.inputs do
      f.input :email
      f.input :password
      f.input :password_confirmation
      f.input :first_name
      f.input :last_name
      f.input :locale, as: :select, collection: %w[en es]
    end
    f.actions
  end

  show do
    attributes_table do
      row :email
      row :first_name
      row :last_name
      row :locale
      row :created_at
      row :updated_at
      row :sign_in_count
      row :current_sign_in_at
      row :last_sign_in_at
      row :current_sign_in_ip
      row :last_sign_in_ip
      row :confirmed_at
      row :confirmation_sent_at
      row :unconfirmed_email
    end
  end
end
