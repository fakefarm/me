1. gem
2. wrap output
3. create a helper method

    markdown(@post.body)

    module ApplicationHelper
      def markdown(text)
        Redcarpet.new(text).to_html.html_safe
      end
    end

