# postgres backups
Notes from [this post](https://devcenter.heroku.com/articles/heroku-postgres-backups#restoring-backups)

## Creating a backup

		heroku pg:backups:capture --app fakefarmapp		

## Downloading backup

		heroku pg:backups:download		

## Restore locally

	pg_restore --verbose --clean --no-acl --no-owner -h localhost -U dave -d FakeFarmApp_development latest.dump

Hit some issues with old tables still part of production. Need to figure out how to remove those.

## Restore production from local