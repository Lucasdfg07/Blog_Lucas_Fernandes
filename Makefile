# make update_gems
update_gems:
	docker-compose run --rm app bundle update

# make db_setup
db_setup:
	docker-compose run --rm app bundle exec rake db:create db:migrate db:seed

# make migrate
migrate:
	docker-compose run --rm app bundle exec rake db:migrate

# make bundle
bundle:
	docker-compose run --rm app bundle install

# make console
console:
	docker-compose run --rm app bundle exec rails c

# make bash
bash:
	docker exec -it rooda_ufrgs_app_1 bash

# make setenv
setenv:
	docker exec rooda_ufrgs_app_1 bin/rails db:environment:set RAILS_ENV=development

