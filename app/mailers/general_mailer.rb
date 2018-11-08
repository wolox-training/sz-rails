class GeneralMailer < ApplicationMailer
  add_template_helper(ApplicationHelper)

  def finish_rent(rent_id)
    @rent = Rent.find(rent_id)
    @book = @rent.book
    @user = @rent.user
    subject = t('rent_email.subject').titleize
    mail(to: @user.email, subject: subject) if @book && @user
  end
end
