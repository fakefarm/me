# Form Helpers

## fields_for

`fields_for` is useful for editing additional model objects with the same form.

For example, if you had a `Person` model with an associated `ContactDetail` model, you could create a form for creating both like so:

```
<%= form_for @person, url: {action: "create"} do |person_form| %>
  <%= person_form.text_field :name %>
  <%= fields_for @person.contact_detail do |contact_detail_form| %>
    <%= contact_detail_form.text_field :phone_number %>
  <% end %>
<% end %>
```

## collection_select

`collection_select` combines `select_tag` with `options_from_collection_for_select`.

On a form builder scoped to the `@person` object, the syntax would be:

`<%= f.collection_select(:city_id, City.all, :id, :name) %>`

Without the form builder, you'd need to pass in the object:

`<%= collection_select(:person, :city_id, City.all, :id, :name) %>`
