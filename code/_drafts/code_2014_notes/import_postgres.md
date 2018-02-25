[Importing and Exporting Heroku Postgres Databases with PG Backups](https://devcenter.heroku.com/articles/heroku-postgres-import-export)

# List out backups
heroku pgbackups

# Destroy top one
heroku pgbackups:destroy <p015>

# Capture newest
heroku pgbackups:capture

# Crate a new backup file
curl -o latest.dump `heroku pgbackups:url`

# Restore local database
pg_restore --verbose --clean --no-acl --no-owner -h localhost -U _<user>_ -d _<invited_home_dev database name>_ latest.dump