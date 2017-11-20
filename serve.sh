#!/bin/bash

(cd my-element && polymer serve) & \
    (cd react-app && yarn start) & \
    (cd elm-app && PORT=3001 elm-app start) && fg
