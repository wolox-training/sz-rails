shared_context 'authenticated user' do
  let(:user) { create(:user) }

  before do
    request.headers.merge! user.create_new_auth_token
  end
end
