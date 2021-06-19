#!/bin/sh

set -e

if [ -f tmp/pids/server.pid ]; then
  rm tmp/pids/server.pid
fi

# Instala as Gems
bundle check || bundle install
# Roda nosso servidor
bundle exec puma -C config/puma.rb -p 80