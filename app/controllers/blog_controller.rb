class BlogController < ApplicationController
    skip_before_action :authenticate_user!
    
    def index
        @posts = Post.order(created_at: :DESC).page params[:page]
    end
end
