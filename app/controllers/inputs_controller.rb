class InputsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: Input.all
    end
    
    def show
        input = find_input
        render json: input, serializer: InputWithOutputsSerializer
    end
    
    def create
        input = Input.create!(input_params)
        render json: input, status: :created
    end

    def update
        input = Input.update!(input_params)
        render json: input, status: :accepted
    end
    
    def destroy
        input = find_input
        input.destroy
        head :no_content
    end
    
    private
    
    def find_input
        Input.find(params[:id])
    end
    
    def render_not_found_response
        render json: { error: "Input not found" }, status: :not_found
    end
    
    def input_params
        params.permit(:name)
    end
    
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
