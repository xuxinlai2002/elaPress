#!/bin/bash

count=0

while true
do
    count=$((${count} + 1))
    echo "start :`date '+%Y%m%d %H:%M:%S'` ...$count"
    node sendContract.js 0x320A06c06b7AE945efD23Ec60Fd7a84C1D1cfe39 0xcd0c4191a2106c134a87021854baa4d35c01f7ba
    echo "end   :`date '+%Y%m%d %H:%M:%S'` ...$count"
    echo ""

    sleep 0.2
done