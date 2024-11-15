#!/usr/bin/env bash

set -e

mkdir deploy &&
  mkdir deploy/server &&
  mkdir deploy/logs &&
  cp -r client/ deploy/client &&
  rm deploy/client/styles.scss deploy/client/styles.css.map &&
  cd server &&
  GOOS=linux GOARCH=amd64 go build -o ../deploy/server/portfolio.exe server.go &&
  cd .. &&
  rsync -avz deploy/* jfdev:/home/fraterhqc/portfolio &&
  ssh root@jfdev "systemctl restart portfolio" &&
  rm -rf deploy
