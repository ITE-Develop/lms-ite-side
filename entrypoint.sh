#!/bin/sh

# run the setup script
if ! ./import-amazon-rds-certs.sh; then
  echo 'failed to import certificates' >&2
  exit 1
fi

# switch to the main container command
exec "$@"