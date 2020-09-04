#!/bin/bash

count=0

while true
do
    count=$((${count} + 1))
    echo "start :`date '+%Y%m%d %H:%M:%S'` ...$count"
    node getBalanceContract.js 0xF16e206A3A413c158b52BAb3bdc2EBE97Bc1756D 0xcd0c4191a2106c134a87021854baa4d35c01f7ba
    echo "end   :`date '+%Y%m%d %H:%M:%S'` ...$count"
    echo ""

    sleep 0.2
done