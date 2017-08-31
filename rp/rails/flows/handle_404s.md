# Handling 404's


```
  class ApplicationController < ActionController::API
    include ActionController::MimeResponds
    include Pundit

    after_action :verify_authorized, except: :index
    after_action :verify_policy_scoped, only: :index

    rescue_from ActionController::UnknownFormat, with: :render_unsupported_media_type
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  private

    def current_user
      nil
    end

    def render_unsupported_media_type
      render json: {}, status: :unsupported_media_type
    end

    def render_not_found
      render json: {}, status: :not_found
    end
  end
```
