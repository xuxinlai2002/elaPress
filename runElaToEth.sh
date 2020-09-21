#!/bin/bash

count=0
echo "test pressure for $1" 


while true
do
    count=$((${count} + 1))
    echo "start :`date '+%Y%m%d %H:%M:%S'` ...$count"
    cd /home/dev/testframework/Elastos.ELA.TestFramework/
    python3 ./pressure_xxl_01.py $1 > ~/elaPress/pressure_xxl_01.log
    echo "end   :`date '+%Y%m%d %H:%M:%S'` ...$count"
    echo ""

    sleep 0.2
done