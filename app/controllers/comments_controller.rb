class CommentsController < ApplicationController
    before_action :set_post, only: [:create]
    
    def index
    end

    def create
        @comment = Comment.new(comment_params)

        @comment.commentable = @post

        if @comment.save
            redirect_to request.referrer, notice: 'Comentário realizado com sucesso!'
        else
            redirect_to request.referrer, alert: 'Erro ao realizar comentário! Tente novamente mais tarde.'
        end
    end

    private

    def set_post
        @post = Post.friendly.find(params[:post_id])
    end

    def comment_params
        params.require(:comment).permit(:name, :email, :content)
    end
end
