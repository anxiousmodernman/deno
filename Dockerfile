FROM ubuntu:18.04

# package deps
RUN apt-get update
RUN apt-get -qq -y install curl
# install deno
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
