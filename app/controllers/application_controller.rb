class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :authorize
  private
  # def current_user
  #   user = User.find_by(id: session[:user_id])
  #   render json: user
  # end
  def authorize    
    current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id  end
  def render_unprocessable_entity_response(invalid)      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity  end

end
