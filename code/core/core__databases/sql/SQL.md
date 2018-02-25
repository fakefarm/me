# SQL

SQL allows you to calculate, filter, view data. 
It also has ability to help keep data clean.
The relationships can be unique, required, and ensured to prevent bad data.

SQL has the query portion and table creation portion. Creating tables is a skill to make sure relationships between data are clear and error free.

## Creating tables.

CREATE TABLE [name of table] (
  [col name] [col type] [settings],
);

**Col name** 
is a business concept. name, department, id

**Col type**
int, varchar(# of letters), 

**settings**
settings are if it is NOT NULL, or relationship to another database, or unique.

### Contraints
You can constrain at a column level or a table level. They have their unique purposes. They also have a different syntax

#### Table contraint
CREATE TABLE Actors (
  foreign key (country_id) references countries (id)
);

_I want a foreign key to be country_id that references countries table through the id_

#### Col constraint
CREATE TABLE Actors (
  country_id int REFERENCES Countries(id)
);

## orphan record
A row in a table containing a FOREIGN KEY that references a missing row in another table is called an orphan record.

## CHECK (setting)
The CHECK constraint is used to validate the value that can be placed in a column. 

```
	CREATE TABLE Actors (
	  salary integer CHECK (salary >= 500),
	  bonus integer CHECK (bonus < salary) ,
	);
```

## Normalization

There are 2 forms of normalization. Not having repeating content in the same row. And not having duplicate content. Aspiring for normalization rules as guides will help drive the database model

Thank you for your input. So at this point, I either comply with her or lose the chance to see them _this_ weekend since we don't have anything officially established yet. 

