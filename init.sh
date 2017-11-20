#!/bin/bash

(cd my-element && bower install)
(cd react-app && yarn install)
(cd elm-app && elm-app install -y)

# Yeah, this is a massive hack, but Polymer expects all elements
# to be on the same level, i.e. in a bower_components (or similar)
# folder...
(cd my-element/bower_components/ && ln -s .. my-element)