# Active Record Migrations
[active record migrations](http://edgeguides.rubyonrails.org/active_record_migrations.html)

## adding index from generator

If you'd like to add an index on the new column, you can do that as well:

```
$ bin/rails generate migration AddPartNumberToProducts part_number:string:index
```

will generate

```
class AddPartNumberToProducts < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :part_number, :string
    add_index :products, :part_number
  end
end
```

## creating a named join table

By default, the name of the join table comes from the union of the first two arguments provided to `create_join_table`, in alphabetical order. To customize the name of the table, provide a `:table_name` option:

```
create_join_table :products, :categories, table_name: :categorization
```

creates a categorization table.

### Adding Indexes to join tables

`create_join_table` also accepts a block, which you can use to add indices (which are not created by default) or additional columns:

```
create_join_table :products, :categories do |t|
  t.index :product_id
  t.index :category_id
end
```

## 3.5 Column Modifiers

Column modifiers can be applied when creating or changing a column:

**limit** - Sets the maximum size of the string/text/binary/integer fields.

**precision** - Defines the precision for the decimal fields, representing the total number of digits in the number.

**scale** - Defines the scale for the decimal fields, representing the number of digits after the decimal point.

**polymorphic** - Adds a type column for belongs_to associations.

**null** - Allows or disallows NULL values in the column.

**default** - Allows to set a default value on the column. Note that if you are using a dynamic value (such as a date), the default will only be calculated the first time (i.e. on the date the migration is applied).

**index** - Adds an index for the column.

**comment** - Adds a comment for the column.

### Two schema dumps (using structure.sql)

There are two ways to dump the schema. This is set in config/application.rb by the config.active_record.schema_format setting, which may be either :sql or :ruby.

db/schema.rb cannot express database specific items such as triggers, sequences, stored procedures or check constraints, etc. Please note that while custom SQL statements can be run in migrations, these statements cannot be reconstituted by the schema dumper. If you are using features like this, then you should set the schema format to :sql.

### Arbitrary SQL

Although Active Record does not provide all the tools for working directly with such features, the `execute` method can be used to execute arbitrary SQL.

