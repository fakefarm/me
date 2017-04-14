---
layout: post
title: "databases"
description: ""
category: software
tags: ["databases", "sql"]
---

# Databases

## Problems with spreadsheets
- Size
- Ease of updating
- Accuracy
- Security
- redundancy
- importance

## Keys
- keys cannot repeat
- non-unique values are the default
- Primary Key is something that's the unique (aka - synthetic key)
- Primary Keys are how you connect tables

## Relationships
- Describe what's already there
- Primary keys and Foreign keys
- One can have many of the other.
- One to many is most common

### Many to Many relationships

## ACID
The capabilities are built in the system...
- Atomic
- Consistent
- Isolated
- Durable

## SQL
- Been around since 1970's
- Small and focused languages
- a declarative

## Entities & Attributes
1. Name the columns consistently,
2. Must declare the type; (string, integer)
3. Is data required or not (NULL, or not NULL)
4. Pattern matching is another feature to add.
5. Each table has a Primary
- naturally, and declare it (like ISBN)
- Or, need to be added (CustomerID, integer, with auto-increment)

### Composite Keys
- combining two columns to become the primary key. (School & Year)
- primarily used for join tables.

## Creating Relationships
Relationships are rules to protect your data.

### one to many (most common)
- the **many** side gets a foreign key
- while diagramming, add crows feet, add PK and FK
-

### one to one
- make sure you look at relationship both ways, becuase it might actually be a 'many-to-one.'

### many to many
- created by a join table.
- when diagramming, ask the question of your one-to-many relationships, if they would ever go the other direction. By creating a many-to-many, you would prevent any future problems.

### Referential integrity enforces the rule of a relationship.
#### When things are deleted -
1. Cascading delete - deletes everything related
2. Cascading Nullify (rarely used)
3. No Action - refuses the delete

## Data Normalization
### 1st normal form
### 2nd normal form
### 3rd normal form

## Optimization

## Sorting

    SELECT Description, ListPrice, Color
    FROM Product
    ORDER BY ListPrice DESC

### Multiple sort

    SELECT Description, ListPrice, Color
    FROM Product
    ORDER BY ListPrice, FirstName;

First sort by last name, then by first name.


## Aggregate Functions

### SUM,

    SELECT COUNT(*)

Add a where,

    SELECT COUNT(*)
    WHERE Price > 5000

### MAX, MIN, AVG

    SELECT MAX(LISTPRICE)
    FROM Product;


    SELECT MAX(LISTPRICE)
    FROM Product;


    SELECT MIN(LISTPRICE)
    FROM Product;

    SELECT AVG(LISTPRICE)
    FROM Product;


### Sum

    SELECT SUM(TotalDue)
    FROM Order
    WHERE CustomerID = 854;

### GROUP BY
Retrieve two columns and have their counts, or whatever needed.
Only use GROUP BY with Aggregate functions.

    SELECT COUNT(*), Color
    FROM Product
    GROUP BY Color

## Joining Tables

![](/images/join_tables.png)

Use JOIN keyword with ON to describe how the two have 'equal' connection.

    SELECT firstname, lastname, employee.departmentID
    FROM Employee JOIN Department
    ON Employee.DepartmentID = Department.DepartmentID

### Inner Join
Only bring back rows where there is a match in both tables.

### Outer Join

Pick one table and it takes precedence, so that it also brings matches that don't contain content from other table.

Need to use LEFT or RIGHT to to say which side of the JOIN

    FROM Employee LEFT OUTER JOIN Department


## Insert, Update, and Delete

INSERT - creates a record
SELECT - reads records
UPDATE - updates the record
DELETE - deletes the records.


### INSERT
Columns must match in name, order, and data type.

    INSERT INTO table
    (column1,col2,...)
    VALUES (value1, value2,...)

Example

    INSERT INTO Employee
    (FirstName, LastName, Dept)
    VALUES ('Joe', 'Allen', 3)

### UPDATE

    UPDATE Employee
    SET Email = "jo@email.com"
    WHERE EmployeeID = 789

If you leave off the WHERE, it would update every record with an email of 'jo@email.com'

### DELETE
Works on rows

    DELETE FROM Employee
    WHERE EmployeeID = 789

#### Delete workflow
Check to confirm that the delete is accurate by testing the query first with a SELECT.
Once you know it's good, then simply swap SELECT for DELETE.

## The Data Definition Language

how to create columns, new tables, adjust foreign keys

  CREATE
  ALTER
  DROP

change the structure of the database


### CREATE a table
![](/images/create_table.png)


### ALTER, or DESTROY a table
![](/images/table.png)

## Primary Roles of Databases

### Data Manipulation
Working with records in the db

    SELECT
    INSERT
    UPDATE
    DELETE

### Data Definition
Modifying the actual db

    CREATE
    ALTER
    DROP

### Data Control
Administring the db, security purposes.

    GRANT
    REVOKE

## Indexes

Quickly find things in the db

Indexs are different than Primary Keys.
PK's ensure uniqueness, but they don't help us find that row among 500k other rows.

### Clustered Index
Like having a phone book, data is structured that way.
Most common is primary key column, and usually best option (and default)

Each table can only have one Clustered Index, but can have multiple non-clustered index.

### Non-clustered Index
Creates a map
Not as fast as clustered sort, but far better than a full table scan.

Working with indexes are ongoing and not really sure what should be non-clustered until know how people are searching the content.

















