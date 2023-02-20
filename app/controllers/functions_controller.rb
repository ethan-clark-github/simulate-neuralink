class FunctionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: Function.all
    end

    def show
        function = find_function
        render json: function, serializer: FunctionWithInputsSerializer
    end

    def create
        function = Function.create!(function_params)
        render json: function, status: :created
    end

    def destroy
        function = find_function
        function.destroy
        head :no_content
    end

    private

    def function_params
        params.permit(:name, :category, :input_id, :output_id, :user_id)
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def find_function
        Function.find(params[:id])
    end
    
    def render_not_found_response
        render json: { error: "Function not found" }, status: :not_found
    end

end
