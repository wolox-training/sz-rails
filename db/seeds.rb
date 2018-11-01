# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

if Rails.env.development?
  puts 'Creating default AdminUser for development environment.'
  admin = AdminUser.create!(
    email:                  Rails.application.secrets.admin_email,
    password:               Rails.application.secrets.admin_password,
    password_confirmation:  Rails.application.secrets.admin_password
  )
  puts 'AdminUser created successfully.' if admin.id
else
  puts 'You have to create AdminUser for this environment.'
end
