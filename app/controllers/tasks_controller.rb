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

  def reorder
    @task = Task.find(params[:id])
    authorize! :update, @task
    respond_with reorder_task(params[:direction])
  end

  private 

  def task_params
    params.require(:task).permit(:title, :project_id, :done, :deadline)
  end

  def reorder_task(direction)
    if direction == 'down'
      @task.move_lower
    else
      @task.move_higher
    end
  end
end
