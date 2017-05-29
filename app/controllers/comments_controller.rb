class CommentsController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource

  def create
    if @comment.save
      respond_with @comment
    else
      render(status: 422, json: @comment.errors.full_messages)
    end
  end

  def update
    @comment.attachment = params[:file]
    @comment.save
    render json: @comment.attachment
  end

  def destroy
    respond_with @comment.destroy
  end

  private 

  def comment_params
    params.require(:comment).permit(:title, :task_id, :file)
  end
end
