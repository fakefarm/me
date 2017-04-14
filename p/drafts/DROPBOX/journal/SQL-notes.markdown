# SQL

### Terminology
Database - Store of Tables made up of rows and columns
DBMS - Database management system
SQL - Structured Query Language

### basic SELECT

    SELECT
Fundamental statement for queries

    FROM
Provides table for SELECT statement

#### Example
    SELECT * FROM Country
Select all of the data from the country table

    Count()
A function that counts the values

### Selecting Columns
#### Examples
    SELECT Name AS Country, LifeExpectancy AS "Life Expectancy"  FROM Country
Two Columns, using the AS alias to change the name of the columns in the output.

### FROM
is for columns

### WHERE
is for rows

#### Example
    SELECT Name AS Country, LifeExpectancy AS "Life Expectancy"  FROM Country WHERE Continent = "Europe"


### Counting Things






