# frozen_string_literal: true

class TranslatorReflex < ApplicationReflex
  def translate message=''
    if message == ''
      cable_ready.add_css_class(selector: "#spin", name: "hidden")
      cable_ready.remove_attribute(selector: "#button_translate", name: "disabled")
      morph :nothing
      return
    end
    cable_ready.set_value(selector: "#response", value: ChatgptService.call(message))
    cable_ready.add_css_class(selector: "#spin", name: "hidden")
    cable_ready.remove_attribute(selector: "#button_translate", name: "disabled")
    morph :nothing
  end
end
