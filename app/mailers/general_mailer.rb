class GeneralMailer < ApplicationMailer
  add_template_helper(ApplicationHelper)

  def finish_rent(rent)
    @rent = rent
    @book = @rent.book
    @user = @rent.user
    mail(to: @user.email, subject: 'Alquiler finalizado') if @book && @user
  end
end
