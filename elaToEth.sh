#!/bin/bash

cd ~/ela/ela_node_regtest/account_xxl

../ela-cli wallet buildtx crosschain --saddress "XFNwHEkHvAvMK7b3BuF5dJUJ1ZvbpprQ14" --to "0x86c354d9e61169fe6fc8a14820dba0241f1f1f2d" --amount "1" --fee "0.0001" --rpcport 22336 --rpcuser User --rpcpassword Password 

../ela-cli wallet signtx --file to_be_signed.txn --password 12345678
../ela-cli wallet showtx --file ready_to_send.txn
../ela-cli wallet sendtx --file ready_to_send.txn --rpcport 22336 --rpcuser User --rpcpassword Password