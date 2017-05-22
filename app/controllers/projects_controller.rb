class ProjectsController < ApplicationController
  load_and_authorize_resource

  def index
    respond_with @projects
  end

  def create
    respond_with current_user.projects.create
  end

  def update
    respond_with @project.update(title: params[:title])
  end

  def destroy
    respond_with @project.destroy
  end
end
