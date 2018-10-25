/*
Copyright 2018 OmiseGO Pte Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

// generates signature
global.Buffer = global.Buffer || require('buffer').Buffer
const keccak256 = require('js-sha3').keccak256
const ethUtil = require('ethereumjs-util')
const sigUtil = require('eth-sig-util')

const NULL_SIG = '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'

function ecSign (tosign, privateKey) {
  const hashed = keccak256(tosign)
  const signed = ethUtil.ecsign(
    Buffer.from(hashed, 'hex'),
    Buffer.from(privateKey.replace('0x', ''), 'hex')
  )
  return sigUtil.concatSig(signed.v, signed.r, signed.s)
}

function sign (tx, privateKeys) {
  // Currently transaction always have 2 inputs.
  // If no private key is given for an input, then we sign with a 'null' signature
  const REQUIRED_SIGNATURES = 2
  const signatures = []

  for (let i = 0; i < REQUIRED_SIGNATURES; i++) {
    if (privateKeys.length > i) {
      signatures.push(ecSign(tx, privateKeys[i]))
    } else {
      // Use null sig for the second signature
      signatures.push(NULL_SIG)
    }
  }

  return signatures
}

module.exports = sign