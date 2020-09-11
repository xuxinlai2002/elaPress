#!/bin/bash

count=0

while true
do
    count=$((${count} + 1))
    echo "start :`date '+%Y%m%d %H:%M:%S'` ...$count"
    node getBalanceContract-web3-interface.js 0xaff851606CB8E24A5a559d9942b17fc59AFc3090 0xcd0c4191a2106c134a87021854baa4d35c01f7ba
    echo "end   :`date '+%Y%m%d %H:%M:%S'` ...$count"
    echo ""

    sleep 0.2
done