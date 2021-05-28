class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update]

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(posts_params)

    if @post.save
      redirect_to blog_index_path, notice: 'Post enviado com sucesso!'
    else
      redirect_to blog_index_path, alert: 'Erro ao enviar o post. Tente novamente mais tarde!'
    end
  end

  def edit
  end

  def update
    if @post.update(posts_params)
      redirect_to blog_index_path, notice: 'Post atualizado com sucesso!'
    else
      redirect_to blog_index_path, alert: 'Erro ao atualizar post. Tente novamente mais tarde!'
    end
  end

  def show
  end

  private

  def posts_params
    params.require(:post).permit(:title, :content, :user_id)
  end

  def set_post
    @post = Post.find(params[:id])
  end
end
