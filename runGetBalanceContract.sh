#!/bin/bash

count=0

while true
do
    count=$((${count} + 1))
    echo "start :`date '+%Y%m%d %H:%M:%S'` ...$count"
    node getBalanceContract.js 0x2a7088a2b1832a0B1E91A5864667f1f1f5b81CbD 0xcd0c4191a2106c134a87021854baa4d35c01f7ba
    echo "end   :`date '+%Y%m%d %H:%M:%S'` ...$count"
    echo ""

    sleep 0.2
done