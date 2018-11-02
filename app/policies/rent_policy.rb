class RentPolicy
  attr_reader :user, :rent

  def initialize(user, rent)
    @user = user
    @rent = rent
  end

  def create?
    @rent.user_id.nil? || user_is_owner_of_rent?
  end

  private

  def user_is_owner_of_rent?
    @user.id == @rent.user_id
  end
end
