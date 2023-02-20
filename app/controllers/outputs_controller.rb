class OutputsController < ApplicationController
    
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: Output.all
    end

    def show
        output = find_output
        render json: output, serializer: OutputWithInputsSerializer
    end

    def create
        output = Output.create!(output_params)
        render json: output, status: :created
    end

    def destroy
        output = find_output
        output.destroy
        head :no_content
    end

    private

    def find_output
        Output.find(params[:id])
    end
    
    def render_not_found_response
        render json: { error: "Output not found" }, status: :not_found
    end
    
    def output_params
        params.permit(:name)
    end
    
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
