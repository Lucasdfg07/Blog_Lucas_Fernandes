FROM ruby:3.0.0-preview2-buster

# add nodejs and yarn dependencies for the frontend
RUN curl -sL https://nsolid-deb.nodesource.com/nsolid_setup_4.x | bash -

# Instala nossas dependencias
RUN apt-get update && apt-get install -qq -y --no-install-recommends \
nsolid-fermium nsolid-console yarn build-essential libpq-dev imagemagick git-all nano vim \
libmagickcore-dev libmagickwand-dev


# Seta nosso path
ENV INSTALL_PATH /Blog

# Cria nosso diretório
RUN mkdir -p $INSTALL_PATH

# Seta o nosso path como o diretório principal
WORKDIR $INSTALL_PATH

# Seta as permissões da pasta
RUN chmod -R 777 $INSTALL_PATH

# Install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn 

# Copia o nosso Gemfile para dentro do container
COPY Gemfile Gemfile.lock ./

# Seta o path para as Gems
ENV BUNDLE_PATH /gems

# Copia nosso código para dentro do container
COPY . .
