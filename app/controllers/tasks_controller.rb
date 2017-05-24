class TasksController < ApplicationController
  load_and_authorize_resource

  def create
    respond_with Task.create(task_params)
  end

  def update
    respond_with @task.update(task_params)
  end

  def destroy
    respond_with @task.destroy
  end

  def task_params
    params.require(:task).permit(:title, :project_id, :done, :deadline)
  end
end
