#!/bin/bash

#https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
cat $1 | openssl dgst -sha512 -binary | openssl base64 -A
