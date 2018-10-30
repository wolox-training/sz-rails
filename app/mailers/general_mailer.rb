class GeneralMailer < ApplicationMailer
  add_template_helper(ApplicationHelper)

  def finish_rent(rent)
    @rent = rent
    @book = @rent.book
    @user = @rent.user
    subject = t('rent_email.subject').titleize
    mail(to: @user.email, subject: subject) if @book && @user
  end
end
