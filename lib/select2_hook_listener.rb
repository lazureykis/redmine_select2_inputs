class Select2HookListener < Redmine::Hook::ViewListener
  render_on :view_layouts_base_html_head, :partial => "select2/metatags"
end
