# Mysql

## Install from homebrew

## Starting
### start
mysql.server start

### stop
mysql.server stop

## commands used
show tables;
show databases;
use <database name>;


## Questions;
Where do i stort my databases?
How do I get to them?
Do they save as global?


## Went through tutorials:
[Mysql tutorial](http://dev.mysql.com/doc/refman/5.0/en/database-use.html)


### [Intro to SQL](http://www.w3schools.com/sql/sql_intro.asp)
left off at [order by](http://www.w3schools.com/sql/sql_orderby.asp)

### [Add a column to an existing MySQL table](http://www.tech-recipes.com/rx/378/add-a-column-to-an-existing-mysql-table/)

MySQL tables are easy to extend with additional columns.

To add a column called email to the contacts table created in Create a basic MySQL table with a datatype of VARCHAR(80), use the following SQL statement:

    ALTER TABLE contacts ADD email VARCHAR(60);
This first statement will add the email column to the end of the table. To insert the new column after a specific column, such as name, use this statement:

    ALTER TABLE contacts ADD email VARCHAR(60) AFTER name;

If you want the new column to be first, use this statement:
    ALTER TABLE contacts ADD email VARCHAR(60) FIRST;


