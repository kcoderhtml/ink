#!/bin/sh

# Start the VHS server
vhs cassette.tape &

# Wait 2 seconds before running the first curl command
sleep 3

# Execute the first curl command
curl http://localhost:3000/hello/world

# Wait 3 seconds before running the second curl command
sleep 3

# Execute the second curl command
curl -X POST http://localhost:3000/lolz --data '{"lol_counter": "1"}'

wait