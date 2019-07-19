/*
    Copyright 2019 OmiseGO Pte Ltd

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

require('dotenv').config()

const config = {
  // see https://github.com/omisego/dev-portal/blob/master/guides/network_endpoints.md for more info
  // on network endpoints
  watcher_url: process.env.WATCHER_URL || '',
  childchain_url: process.env.CHILDCHAIN_URL || '',

  rootchain_plasma_contract_address: process.env.ROOTCHAIN_CONTRACT || '',

  // delay time for block to be mined (times may vary if you are running your own chain, or running on 
  // one of the testnets)
  rootchain_delay_millis: process.env.ROOTCHAIN_DELAY_MILLIS || 40000,

  geth_url: process.env.GETH_URL || '',

  alice_eth_address: process.env.ALICE_ETH_ADDRESS || '',
  // Note: make sure this value is prefixed with '0x' or you may see nonce errors
  alice_eth_address_private_key: process.env.ALICE_ETH_ADDRESS_PRIVATE_KEY || '',

  // amount of ETH to deposit from rootchain to childchain
  alice_eth_deposit_amount: process.env.ALICE_ETH_DEPOSIT_AMOUNT || '.1',

  // amount of ETH to transfer from Alice to Bob on the childchain
  alice_eth_transfer_amount: process.env.ALICE_ETH_TRANSFER_AMOUNT || '.05',

  bob_eth_address: process.env.BOB_ETH_ADDRESS || '',
  // Note: make sure this value is prefixed with '0x' or you may see nonce errors
  bob_eth_address_private_key: process.env.BOB_ETH_ADDRESS_PRIVATE_KEY || ''
}

module.exports = config