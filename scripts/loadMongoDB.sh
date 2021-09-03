#!/bin/bash

MONGOPOD=`oc get pod | grep mongodb | awk '{ print $1 }'`
oc rsh $MONGOPOD mongoimport --db maps --collection poi --authenticationDatabase maps --username maps --password pass --drop < ../files/poi.json
