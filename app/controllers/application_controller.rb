class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  rescue_from CanCan::AccessDenied do |e|
    respond_to do |format|
      format.html { redirect_to root_path, flash: { alert: "Você não possui autorização para acessar essa página!" } }
      format.json { render json: { success: false }, status: 401 }
    end
  end
end
