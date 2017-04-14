# PostGres


\d + table name

#### Create table
when you create a table, you need to also create columns

    stop pg_ctl stop (dir)


#### Start postgres

    pg_ctl -D /usr/local/var/postgres/ start

#### Create a DB

    createdb --owner = dave --no_password <dbname>



#### Help

    postgres --help

    pg-ctl --help

    \h
Note - anything in [] is optional

#### stored in 

    /usr/local/var


### Setup
install w/ brew
change path
start server
create user
create db's

#### check to see if postgres is running;

  ps aux | grep postgres

#### Open terminal to db

    pssql --username dave <dbname>