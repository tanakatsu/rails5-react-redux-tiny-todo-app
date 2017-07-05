require 'test_helper'

class PageControllerTest < ActionDispatch::IntegrationTest
  test "should get todo" do
    get page_todo_url
    assert_response :success
  end

end
