 const PaymentGateway = {
    "_format": "hh-sol-artifact-1",
    "contractName": "PaymentGateway",
    "sourceName": "contracts/OnyxPay.sol",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "AccessControlBadConfirmation",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "neededRole",
            "type": "bytes32"
          }
        ],
        "name": "AccessControlUnauthorizedAccount",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "EnforcedPause",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ExpectedPause",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ReentrancyGuardReentrantCall",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          }
        ],
        "name": "SafeERC20FailedOperation",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "Paused",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "PaymentProcessed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "paymentId",
            "type": "bytes32"
          }
        ],
        "name": "RecurringPaymentCancelled",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "paymentId",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          }
        ],
        "name": "RecurringPaymentCreated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "previousAdminRole",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "newAdminRole",
            "type": "bytes32"
          }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "RoleGranted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "RoleRevoked",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "Unpaused",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "ADMIN_ROLE",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "balances",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "paymentId",
            "type": "bytes32"
          }
        ],
        "name": "cancelRecurringPayment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          }
        ],
        "name": "getRoleAdmin",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "hasRole",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "paused",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "processPayment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "recurringPayments",
        "outputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "frequency",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastPaid",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "active",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "callerConfirmation",
            "type": "address"
          }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "frequency",
            "type": "uint256"
          }
        ],
        "name": "setupRecurringPayment",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "bytecode": "0x60806040523461003b57600160005560ff196001541660015561002133610040565b5061002b336100bf565b506040516108ad90816101618239f35b600080fd5b6001600160a01b031660008181527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b602052604081205490919060ff166100bb5781805260026020526040822081835260205260408220600160ff198254161790553391600080516020610a0e8339815191528180a4600190565b5090565b6001600160a01b031660008181527fe5ebfa64fca8d502a8e50c1edffd2c31ef4dad5b396e65d9f397fb028f74abc560205260408120549091907fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217759060ff1661015b5780835260026020526040832082845260205260408320600160ff19825416179055600080516020610a0e833981519152339380a4600190565b50509056fe608060408181526004908136101561001657600080fd5b600092833560e01c90816301ffc9a7146106b75750806310112f1914610548578063125ff8a3146104dc578063248a9ca3146104b157806327e235e31461047b5780632f2ff15d1461045357806336568abe1461040c5780635c975abb146103e857806375b238fc146103ad57806380ab611e1461031457806391d14854146102cd578063a217fddf146102ae578063d1a0cc5c146100ff5763d547741f146100be57600080fd5b346100fb57806003193601126100fb576100f791356100f260016100e0610726565b9383875260026020528620015461073c565b610800565b5080f35b8280fd5b5090346100fb5760603660031901126100fb5761011a61070b565b91610123610726565b9160443592600286541461029f576002865560ff60015416610290576001600160a01b039081169485156102595784156102255716825160208101906323b872dd60e01b82523360248201528660448201528560648201526064815260a0810181811067ffffffffffffffff8211176102125785525160209188919082855af1156102085785513d6101ff5750803b155b6101eb575050519081527f0538ab32a957d2b55d0ec70a4029e73fdf19f500832839b1d7bafcfbca2a563060203392a36001815580f35b6024925191635274afe760e01b8352820152fd5b600114156101b4565b82513d87823e3d90fd5b634e487b7160e01b895260418552602489fd5b835162461bcd60e51b8152602081850152600e60248201526d125b9d985b1a5908185b5bdd5b9d60921b6044820152606490fd5b835162461bcd60e51b81526020818501526011602482015270125b9d985b1a59081c9958da5c1a595b9d607a1b6044820152606490fd5b50905163d93c066560e01b8152fd5b509051633ee5aeb560e01b8152fd5b8382346102c957816003193601126102c95751908152602090f35b5080fd5b5090346100fb57816003193601126100fb578160209360ff926102ee610726565b90358252600286528282206001600160a01b039091168252855220549151911615158152f35b50346100fb5760203660031901126100fb5781359182845260036020528184209160018060a01b038354163303610379575050600501805460ff191690557f5273fce29cdd99fba35ed6ef30257f2d25797cfff828cd5d20511bb75bd8cec38280a280f35b906020606492519162461bcd60e51b8352820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b6044820152fd5b8382346102c957816003193601126102c957602090517fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217758152f35b8382346102c957816003193601126102c95760209060ff6001541690519015158152f35b508290346102c957806003193601126102c957610427610726565b90336001600160a01b0383160361044457506100f7919235610800565b5163334bd91960e11b81528390fd5b50346100fb57806003193601126100fb576100f7913561047660016100e0610726565b610780565b5090346100fb5760203660031901126100fb5760209282916001600160a01b036104a361070b565b168252845220549051908152f35b5090346100fb5760203660031901126100fb5781602093600192358152600285522001549051908152f35b50346100fb5760203660031901126100fb578060c0938335815260036020522060018060a01b039283825416936001830154169260028301549060ff600560038601549486015495015416948151968752602087015285015260608401526080830152151560a0820152f35b508290346102c95760603660031901126102c95761056461070b565b6024359160443592815160208101943360601b865260018060a01b0392838616956bffffffffffffffffffffffff199060601b1660348401528060488401528160688401524260888401526088835260c083019367ffffffffffffffff97848610898711176106a45785875284519020976101808501908111868210176106a4579260209a928a600596938b98968a52338752808a60e08701938d855261010088019586526101208801968752610160610140890198428a52019b60018d52815260206003905220975116906bffffffffffffffffffffffff60a01b918289541617885560018801925116908254161790555160028501555160038401555190820155019051151560ff801983541691161790555192827f2b23221011f6caf5cadd9fa17b034532e395546f51a9eca85d615a83d54c2468339280a48152f35b634e487b7160e01b8a5260418b5260248afd5b849084346100fb5760203660031901126100fb573563ffffffff60e01b81168091036100fb5760209250637965db0b60e01b81149081156106fa575b5015158152f35b6301ffc9a760e01b149050836106f3565b600435906001600160a01b038216820361072157565b600080fd5b602435906001600160a01b038216820361072157565b80600052600260205260406000203360005260205260ff60406000205416156107625750565b6044906040519063e2517d3f60e01b82523360048301526024820152fd5b906000918083526002602052604083209160018060a01b03169182845260205260ff604084205416156000146107fb5780835260026020526040832082845260205260408320600160ff198254161790557f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d339380a4600190565b505090565b906000918083526002602052604083209160018060a01b03169182845260205260ff6040842054166000146107fb578083526002602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a460019056fea2646970667358221220fa993a9f133fa0fec7869f15bb39631e7c9951450d0b6407016566b305d401ec64736f6c634300081400332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d",
    "deployedBytecode": "0x608060408181526004908136101561001657600080fd5b600092833560e01c90816301ffc9a7146106b75750806310112f1914610548578063125ff8a3146104dc578063248a9ca3146104b157806327e235e31461047b5780632f2ff15d1461045357806336568abe1461040c5780635c975abb146103e857806375b238fc146103ad57806380ab611e1461031457806391d14854146102cd578063a217fddf146102ae578063d1a0cc5c146100ff5763d547741f146100be57600080fd5b346100fb57806003193601126100fb576100f791356100f260016100e0610726565b9383875260026020528620015461073c565b610800565b5080f35b8280fd5b5090346100fb5760603660031901126100fb5761011a61070b565b91610123610726565b9160443592600286541461029f576002865560ff60015416610290576001600160a01b039081169485156102595784156102255716825160208101906323b872dd60e01b82523360248201528660448201528560648201526064815260a0810181811067ffffffffffffffff8211176102125785525160209188919082855af1156102085785513d6101ff5750803b155b6101eb575050519081527f0538ab32a957d2b55d0ec70a4029e73fdf19f500832839b1d7bafcfbca2a563060203392a36001815580f35b6024925191635274afe760e01b8352820152fd5b600114156101b4565b82513d87823e3d90fd5b634e487b7160e01b895260418552602489fd5b835162461bcd60e51b8152602081850152600e60248201526d125b9d985b1a5908185b5bdd5b9d60921b6044820152606490fd5b835162461bcd60e51b81526020818501526011602482015270125b9d985b1a59081c9958da5c1a595b9d607a1b6044820152606490fd5b50905163d93c066560e01b8152fd5b509051633ee5aeb560e01b8152fd5b8382346102c957816003193601126102c95751908152602090f35b5080fd5b5090346100fb57816003193601126100fb578160209360ff926102ee610726565b90358252600286528282206001600160a01b039091168252855220549151911615158152f35b50346100fb5760203660031901126100fb5781359182845260036020528184209160018060a01b038354163303610379575050600501805460ff191690557f5273fce29cdd99fba35ed6ef30257f2d25797cfff828cd5d20511bb75bd8cec38280a280f35b906020606492519162461bcd60e51b8352820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b6044820152fd5b8382346102c957816003193601126102c957602090517fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217758152f35b8382346102c957816003193601126102c95760209060ff6001541690519015158152f35b508290346102c957806003193601126102c957610427610726565b90336001600160a01b0383160361044457506100f7919235610800565b5163334bd91960e11b81528390fd5b50346100fb57806003193601126100fb576100f7913561047660016100e0610726565b610780565b5090346100fb5760203660031901126100fb5760209282916001600160a01b036104a361070b565b168252845220549051908152f35b5090346100fb5760203660031901126100fb5781602093600192358152600285522001549051908152f35b50346100fb5760203660031901126100fb578060c0938335815260036020522060018060a01b039283825416936001830154169260028301549060ff600560038601549486015495015416948151968752602087015285015260608401526080830152151560a0820152f35b508290346102c95760603660031901126102c95761056461070b565b6024359160443592815160208101943360601b865260018060a01b0392838616956bffffffffffffffffffffffff199060601b1660348401528060488401528160688401524260888401526088835260c083019367ffffffffffffffff97848610898711176106a45785875284519020976101808501908111868210176106a4579260209a928a600596938b98968a52338752808a60e08701938d855261010088019586526101208801968752610160610140890198428a52019b60018d52815260206003905220975116906bffffffffffffffffffffffff60a01b918289541617885560018801925116908254161790555160028501555160038401555190820155019051151560ff801983541691161790555192827f2b23221011f6caf5cadd9fa17b034532e395546f51a9eca85d615a83d54c2468339280a48152f35b634e487b7160e01b8a5260418b5260248afd5b849084346100fb5760203660031901126100fb573563ffffffff60e01b81168091036100fb5760209250637965db0b60e01b81149081156106fa575b5015158152f35b6301ffc9a760e01b149050836106f3565b600435906001600160a01b038216820361072157565b600080fd5b602435906001600160a01b038216820361072157565b80600052600260205260406000203360005260205260ff60406000205416156107625750565b6044906040519063e2517d3f60e01b82523360048301526024820152fd5b906000918083526002602052604083209160018060a01b03169182845260205260ff604084205416156000146107fb5780835260026020526040832082845260205260408320600160ff198254161790557f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d339380a4600190565b505090565b906000918083526002602052604083209160018060a01b03169182845260205260ff6040842054166000146107fb578083526002602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a460019056fea2646970667358221220fa993a9f133fa0fec7869f15bb39631e7c9951450d0b6407016566b305d401ec64736f6c63430008140033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
  

  const YieldFarmingVault= {
    "_format": "hh-sol-artifact-1",
    "contractName": "YieldFarmingVault",
    "sourceName": "contracts/OnyxPay.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "AccessControlBadConfirmation",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "neededRole",
            "type": "bytes32"
          }
        ],
        "name": "AccessControlUnauthorizedAccount",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "EnforcedPause",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ExpectedPause",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ReentrancyGuardReentrantCall",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          }
        ],
        "name": "SafeERC20FailedOperation",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "shares",
            "type": "uint256"
          }
        ],
        "name": "Deposited",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "Paused",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "previousAdminRole",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "newAdminRole",
            "type": "bytes32"
          }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "RoleGranted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "RoleRevoked",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "protocol",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "allocation",
            "type": "uint256"
          }
        ],
        "name": "StrategyUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "Unpaused",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "shares",
            "type": "uint256"
          }
        ],
        "name": "Withdrawn",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "STRATEGY_ROLE",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          }
        ],
        "name": "getRoleAdmin",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "hasRole",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "paused",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract IYieldProtocol",
            "name": "",
            "type": "address"
          }
        ],
        "name": "protocolAllocations",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "callerConfirmation",
            "type": "address"
          }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "token",
        "outputs": [
          {
            "internalType": "contract IERC20",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalShares",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalTokens",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract IYieldProtocol[]",
            "name": "protocols",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "allocations",
            "type": "uint256[]"
          }
        ],
        "name": "updateStrategy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "userInfo",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "shares",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastDepositedTime",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "shares",
            "type": "uint256"
          }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "yieldProtocols",
        "outputs": [
          {
            "internalType": "contract IYieldProtocol",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "bytecode": "0x60a0346100a357601f61115b38819003918201601f19168301916001600160401b038311848410176100a8578084926020946040528339810103126100a357516001600160a01b038116908190036100a357600160005560ff196001541660015560805261006c336100be565b506100763361013d565b50604051610f5c90816101df823960805181818160fe0152818161029e015281816109660152610de10152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b031660008181527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b602052604081205490919060ff166101395781805260026020526040822081835260205260408220600160ff19825416179055339160008051602061113b8339815191528180a4600190565b5090565b6001600160a01b031660008181527f9f395a28f96d8e80f6ef281c0a530b8bbf003a4c03630cf9b76fee5e04f8324360205260408120549091907f928286c473ded01ff8bf61a1986f14a0579066072fa8261442d9fea514d93a4c9060ff166101d95780835260026020526040832082845260205260408320600160ff1982541617905560008051602061113b833981519152339380a4600190565b50509056fe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a714610a40575081631959a002146109fc578163248a9ca3146109d15781632e1a7d4d146107a05781632f2ff15d1461077657816336568abe146107305781633a98ef3914610712578163580b7c2e146106d75781635c975abb146106b35781635cde857d146106795781637e1c0c091461065a57816391d14854146106135781639a3334f614610369578163a217fddf1461034e578163b6b55f25146101b9578163bfe014a414610175578163d547741f14610131575063fc0c546a146100eb57600080fd5b3461012d578160031936011261012d57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5080fd5b9190503461017157806003193601126101715761016d91356101686001610156610a93565b93838752600260205286200154610b2c565b610bf0565b5080f35b8280fd5b9050346101715760203660031901126101715735916006548310156101b657506101a0602092610adf565b905491519160018060a01b039160031b1c168152f35b80fd5b83833461012d5760209081600319360112610171578335916101d9610d4f565b60ff6001541661033e57821561030b578454806102ef575082905b33855260038152828520610209838254610cb0565b9055338552600381524260018487200155610225828754610cb0565b865561023384600554610cb0565b60055582516323b872dd60e01b828201523360248201523060448201526064808201869052815260a0810167ffffffffffffffff8111828210176102dc57849392916102c2917f73a19dd210f1a7f902193214c0ee91dd35ee5b4d920cba8d519eca65a7b488ca96527f0000000000000000000000000000000000000000000000000000000000000000610ce7565b6102ca610db2565b82519485528401523392a26001815580f35b634e487b7160e01b875260418852602487fd5b6102fc6103059185610c67565b60055490610c90565b906101f4565b8490606492519162461bcd60e51b8352820152600e60248201526d125b9d985b1a5908185b5bdd5b9d60921b6044820152fd5b815163d93c066560e01b81528590fd5b50503461012d578160031936011261012d5751908152602090f35b9190503461017157806003193601126101715767ffffffffffffffff90823582811161060f5761039c9036908501610aae565b90602493843590811161060b576103b69036908701610aae565b9490917f928286c473ded01ff8bf61a1986f14a0579066072fa8261442d9fea514d93a4c9384895260209460028652868a20338b52865260ff878b205416156105ee57508681036105ba5788805b88821061059557606491500361055e5760069788548a8a558061051d575b50895b828110610438578a610435610db2565b80f35b61044b610446828587610d8e565b610d9e565b8a546801000000000000000081101561050b577fe2d9b7f1e07c794d9c19cb81343399f288c6d5a7ba85b73669b438836de8c2e3896104fa8f958f958f958f838f8e6105069c8f92946104d3859e8e610446986104b28b8a9460016104f29e019055610adf565b81549060031b9060018060a01b039e8f809116831b921b1916179055610d8e565b3591886104e4610446888888610d8e565b16815260078c522055610d8e565b16948c610d8e565b358c51908152a2610d7f565b610425565b634e487b7160e01b8d5260418452868dfd5b898b527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f908101905b8181106105535750610422565b8b8155600101610546565b855162461bcd60e51b81528089018690526012818501527124b73b30b634b21030b63637b1b0ba34b7b760711b6044820152606490fd5b6105ae6105b4916105a7848c8a610d8e565b3590610cb0565b91610d7f565b90610404565b855162461bcd60e51b8152808901869052600f818501526e098cadccee8d040dad2e6dac2e8c6d608b1b6044820152606490fd5b865163e2517d3f60e01b815233818b015280850191909152604490fd5b8680fd5b8480fd5b9050346101715781600319360112610171578160209360ff92610634610a93565b90358252600286528282206001600160a01b039091168252855220549151911615158152f35b50503461012d578160031936011261012d576020906005549051908152f35b90503461017157602036600319011261017157356001600160a01b0381169081900361017157828291602094526007845220549051908152f35b50503461012d578160031936011261012d5760209060ff6001541690519015158152f35b50503461012d578160031936011261012d57602090517f928286c473ded01ff8bf61a1986f14a0579066072fa8261442d9fea514d93a4c8152f35b90503461017157826003193601126101715760209250549051908152f35b83833461012d578060031936011261012d5761074a610a93565b90336001600160a01b03831603610767575061016d919235610bf0565b5163334bd91960e11b81528390fd5b9190503461017157806003193601126101715761016d913561079b6001610156610a93565b610b70565b90503461017157602092836003193601126101b6578135926107c0610d4f565b831515806109bd575b1561098a576107e56107dd60055486610c67565b845490610c90565b923383526003958681528284206107fd878254610d72565b905561080a868354610d72565b825561081885600554610d72565b60055584845b6006548110156108ff5761083181610adf565b90546001600160a01b03918b1b1c8116875260078452858720546064906108589085610c67565b0490811515806108f6575b610878575b505061087390610d7f565b61081e565b61088483999293610adf565b9054908c1b1c16803b156108f2578780916024895180948193632e1a7d4d60e01b8352878910888a180288188c8401525af180156108e8579161087393916108d1936108d9575b50610d72565b969038610868565b6108e290610cbd565b386108cb565b87513d8a823e3d90fd5b8780fd5b50881515610863565b5083878693825163a9059cbb60e01b82820152336024820152846044820152604481526080810181811067ffffffffffffffff8211176102dc57849392916102ca917f92ccf450a286a957af52509bc1c9939d1a6a481783e142e41e2499f0bb66ebc696527f0000000000000000000000000000000000000000000000000000000000000000610ce7565b5162461bcd60e51b8152808301859052600e60248201526d496e76616c69642073686172657360901b6044820152606490fd5b5033825260038552808220548411156107c9565b9050346101715760203660031901126101715781602093600192358152600285522001549051908152f35b90503461017157602036600319011261017157356001600160a01b038116908190036101715791819281526003602052206001815491015482519182526020820152f35b849134610171576020366003190112610171573563ffffffff60e01b81168091036101715760209250637965db0b60e01b8114908115610a82575b5015158152f35b6301ffc9a760e01b14905083610a7b565b602435906001600160a01b0382168203610aa957565b600080fd5b9181601f84011215610aa95782359167ffffffffffffffff8311610aa9576020808501948460051b010111610aa957565b600654811015610b165760066000527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0190600090565b634e487b7160e01b600052603260045260246000fd5b80600052600260205260406000203360005260205260ff6040600020541615610b525750565b6044906040519063e2517d3f60e01b82523360048301526024820152fd5b906000918083526002602052604083209160018060a01b03169182845260205260ff60408420541615600014610beb5780835260026020526040832082845260205260408320600160ff198254161790557f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d339380a4600190565b505090565b906000918083526002602052604083209160018060a01b03169182845260205260ff604084205416600014610beb578083526002602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4600190565b81810292918115918404141715610c7a57565b634e487b7160e01b600052601160045260246000fd5b8115610c9a570490565b634e487b7160e01b600052601260045260246000fd5b91908201809211610c7a57565b67ffffffffffffffff8111610cd157604052565b634e487b7160e01b600052604160045260246000fd5b906000602091828151910182855af115610d43576000513d610d3a57506001600160a01b0381163b155b610d185750565b604051635274afe760e01b81526001600160a01b039091166004820152602490fd5b60011415610d11565b6040513d6000823e3d90fd5b600260005414610d60576002600055565b604051633ee5aeb560e01b8152600490fd5b91908203918211610c7a57565b6000198114610c7a5760010190565b9190811015610b165760051b0190565b356001600160a01b0381168103610aa95790565b604080516370a0823160e01b8152306004808301919091529192916024916001600160a01b03906020808286817f000000000000000000000000000000000000000000000000000000000000000087165afa918215610f1b57600092610ec3575b5060005b600654811015610eb95780610e2c8592610adf565b929054600393841b1c1660005260078352846064610e4e8b6000205487610c67565b0492610e5983610adf565b9054911b1c1691823b15610aa9576000928884928c51958693849263b6b55f2560e01b84528c8401525af1918215610eae57610e9a92610e9f575b50610d7f565b610e17565b610ea890610cbd565b38610e94565b89513d6000823e3d90fd5b5050505050509050565b9091823d8411610f14575b601f8101601f1916830167ffffffffffffffff811184821017610f0257849184918b52810103126101b65750519038610e13565b634e487b7160e01b8352604187528783fd5b503d610ece565b87513d6000823e3d90fdfea2646970667358221220d1c22c2a36afecc565297c867340a2014952d502b21f291f069f752a1d9953e064736f6c634300081400332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d",
    "deployedBytecode": "0x608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a714610a40575081631959a002146109fc578163248a9ca3146109d15781632e1a7d4d146107a05781632f2ff15d1461077657816336568abe146107305781633a98ef3914610712578163580b7c2e146106d75781635c975abb146106b35781635cde857d146106795781637e1c0c091461065a57816391d14854146106135781639a3334f614610369578163a217fddf1461034e578163b6b55f25146101b9578163bfe014a414610175578163d547741f14610131575063fc0c546a146100eb57600080fd5b3461012d578160031936011261012d57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5080fd5b9190503461017157806003193601126101715761016d91356101686001610156610a93565b93838752600260205286200154610b2c565b610bf0565b5080f35b8280fd5b9050346101715760203660031901126101715735916006548310156101b657506101a0602092610adf565b905491519160018060a01b039160031b1c168152f35b80fd5b83833461012d5760209081600319360112610171578335916101d9610d4f565b60ff6001541661033e57821561030b578454806102ef575082905b33855260038152828520610209838254610cb0565b9055338552600381524260018487200155610225828754610cb0565b865561023384600554610cb0565b60055582516323b872dd60e01b828201523360248201523060448201526064808201869052815260a0810167ffffffffffffffff8111828210176102dc57849392916102c2917f73a19dd210f1a7f902193214c0ee91dd35ee5b4d920cba8d519eca65a7b488ca96527f0000000000000000000000000000000000000000000000000000000000000000610ce7565b6102ca610db2565b82519485528401523392a26001815580f35b634e487b7160e01b875260418852602487fd5b6102fc6103059185610c67565b60055490610c90565b906101f4565b8490606492519162461bcd60e51b8352820152600e60248201526d125b9d985b1a5908185b5bdd5b9d60921b6044820152fd5b815163d93c066560e01b81528590fd5b50503461012d578160031936011261012d5751908152602090f35b9190503461017157806003193601126101715767ffffffffffffffff90823582811161060f5761039c9036908501610aae565b90602493843590811161060b576103b69036908701610aae565b9490917f928286c473ded01ff8bf61a1986f14a0579066072fa8261442d9fea514d93a4c9384895260209460028652868a20338b52865260ff878b205416156105ee57508681036105ba5788805b88821061059557606491500361055e5760069788548a8a558061051d575b50895b828110610438578a610435610db2565b80f35b61044b610446828587610d8e565b610d9e565b8a546801000000000000000081101561050b577fe2d9b7f1e07c794d9c19cb81343399f288c6d5a7ba85b73669b438836de8c2e3896104fa8f958f958f958f838f8e6105069c8f92946104d3859e8e610446986104b28b8a9460016104f29e019055610adf565b81549060031b9060018060a01b039e8f809116831b921b1916179055610d8e565b3591886104e4610446888888610d8e565b16815260078c522055610d8e565b16948c610d8e565b358c51908152a2610d7f565b610425565b634e487b7160e01b8d5260418452868dfd5b898b527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f908101905b8181106105535750610422565b8b8155600101610546565b855162461bcd60e51b81528089018690526012818501527124b73b30b634b21030b63637b1b0ba34b7b760711b6044820152606490fd5b6105ae6105b4916105a7848c8a610d8e565b3590610cb0565b91610d7f565b90610404565b855162461bcd60e51b8152808901869052600f818501526e098cadccee8d040dad2e6dac2e8c6d608b1b6044820152606490fd5b865163e2517d3f60e01b815233818b015280850191909152604490fd5b8680fd5b8480fd5b9050346101715781600319360112610171578160209360ff92610634610a93565b90358252600286528282206001600160a01b039091168252855220549151911615158152f35b50503461012d578160031936011261012d576020906005549051908152f35b90503461017157602036600319011261017157356001600160a01b0381169081900361017157828291602094526007845220549051908152f35b50503461012d578160031936011261012d5760209060ff6001541690519015158152f35b50503461012d578160031936011261012d57602090517f928286c473ded01ff8bf61a1986f14a0579066072fa8261442d9fea514d93a4c8152f35b90503461017157826003193601126101715760209250549051908152f35b83833461012d578060031936011261012d5761074a610a93565b90336001600160a01b03831603610767575061016d919235610bf0565b5163334bd91960e11b81528390fd5b9190503461017157806003193601126101715761016d913561079b6001610156610a93565b610b70565b90503461017157602092836003193601126101b6578135926107c0610d4f565b831515806109bd575b1561098a576107e56107dd60055486610c67565b845490610c90565b923383526003958681528284206107fd878254610d72565b905561080a868354610d72565b825561081885600554610d72565b60055584845b6006548110156108ff5761083181610adf565b90546001600160a01b03918b1b1c8116875260078452858720546064906108589085610c67565b0490811515806108f6575b610878575b505061087390610d7f565b61081e565b61088483999293610adf565b9054908c1b1c16803b156108f2578780916024895180948193632e1a7d4d60e01b8352878910888a180288188c8401525af180156108e8579161087393916108d1936108d9575b50610d72565b969038610868565b6108e290610cbd565b386108cb565b87513d8a823e3d90fd5b8780fd5b50881515610863565b5083878693825163a9059cbb60e01b82820152336024820152846044820152604481526080810181811067ffffffffffffffff8211176102dc57849392916102ca917f92ccf450a286a957af52509bc1c9939d1a6a481783e142e41e2499f0bb66ebc696527f0000000000000000000000000000000000000000000000000000000000000000610ce7565b5162461bcd60e51b8152808301859052600e60248201526d496e76616c69642073686172657360901b6044820152606490fd5b5033825260038552808220548411156107c9565b9050346101715760203660031901126101715781602093600192358152600285522001549051908152f35b90503461017157602036600319011261017157356001600160a01b038116908190036101715791819281526003602052206001815491015482519182526020820152f35b849134610171576020366003190112610171573563ffffffff60e01b81168091036101715760209250637965db0b60e01b8114908115610a82575b5015158152f35b6301ffc9a760e01b14905083610a7b565b602435906001600160a01b0382168203610aa957565b600080fd5b9181601f84011215610aa95782359167ffffffffffffffff8311610aa9576020808501948460051b010111610aa957565b600654811015610b165760066000527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0190600090565b634e487b7160e01b600052603260045260246000fd5b80600052600260205260406000203360005260205260ff6040600020541615610b525750565b6044906040519063e2517d3f60e01b82523360048301526024820152fd5b906000918083526002602052604083209160018060a01b03169182845260205260ff60408420541615600014610beb5780835260026020526040832082845260205260408320600160ff198254161790557f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d339380a4600190565b505090565b906000918083526002602052604083209160018060a01b03169182845260205260ff604084205416600014610beb578083526002602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4600190565b81810292918115918404141715610c7a57565b634e487b7160e01b600052601160045260246000fd5b8115610c9a570490565b634e487b7160e01b600052601260045260246000fd5b91908201809211610c7a57565b67ffffffffffffffff8111610cd157604052565b634e487b7160e01b600052604160045260246000fd5b906000602091828151910182855af115610d43576000513d610d3a57506001600160a01b0381163b155b610d185750565b604051635274afe760e01b81526001600160a01b039091166004820152602490fd5b60011415610d11565b6040513d6000823e3d90fd5b600260005414610d60576002600055565b604051633ee5aeb560e01b8152600490fd5b91908203918211610c7a57565b6000198114610c7a5760010190565b9190811015610b165760051b0190565b356001600160a01b0381168103610aa95790565b604080516370a0823160e01b8152306004808301919091529192916024916001600160a01b03906020808286817f000000000000000000000000000000000000000000000000000000000000000087165afa918215610f1b57600092610ec3575b5060005b600654811015610eb95780610e2c8592610adf565b929054600393841b1c1660005260078352846064610e4e8b6000205487610c67565b0492610e5983610adf565b9054911b1c1691823b15610aa9576000928884928c51958693849263b6b55f2560e01b84528c8401525af1918215610eae57610e9a92610e9f575b50610d7f565b610e17565b610ea890610cbd565b38610e94565b89513d6000823e3d90fd5b5050505050509050565b9091823d8411610f14575b601f8101601f1916830167ffffffffffffffff811184821017610f0257849184918b52810103126101b65750519038610e13565b634e487b7160e01b8352604187528783fd5b503d610ece565b87513d6000823e3d90fdfea2646970667358221220d1c22c2a36afecc565297c867340a2014952d502b21f291f069f752a1d9953e064736f6c63430008140033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }

  const RewardsDistributor = {
    "_format": "hh-sol-artifact-1",
    "contractName": "RewardsDistributor",
    "sourceName": "contracts/OnyxPay.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_rewardsToken",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "AccessControlBadConfirmation",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "neededRole",
            "type": "bytes32"
          }
        ],
        "name": "AccessControlUnauthorizedAccount",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ReentrancyGuardReentrantCall",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          }
        ],
        "name": "SafeERC20FailedOperation",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "RewardsClaimed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "RewardsDistributed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "previousAdminRole",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "newAdminRole",
            "type": "bytes32"
          }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "RoleGranted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "RoleRevoked",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "REWARDS_MANAGER_ROLE",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "claimRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address[]",
            "name": "users",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
          }
        ],
        "name": "distributeRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          }
        ],
        "name": "getRoleAdmin",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "hasRole",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "callerConfirmation",
            "type": "address"
          }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "rewardsToken",
        "outputs": [
          {
            "internalType": "contract IERC20",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "userRewards",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "pending",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "claimed",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastUpdateTime",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "bytecode": "0x60a03461008c57601f610a6138819003918201601f19168301916001600160401b038311848410176100915780849260209460405283398101031261008c57516001600160a01b0381169081900361008c576001600055608052610062336100a7565b5061006c33610126565b5060405161087990816101c8823960805181818161013e01526102230152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b031660008181527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49602052604081205490919060ff166101225781805260016020526040822081835260205260408220600160ff198254161790553391600080516020610a418339815191528180a4600190565b5090565b6001600160a01b031660008181527f929a15bc915b16d687b41268a8ac0ac00914e1dfce0d528686ae6e5a10dafac860205260408120549091907f51785d261c3b3e8c2cfe2d0e108b9ab2b1fb703ff9e9e49aba4ebdc85c36152b9060ff166101c25780835260016020526040832082845260205260408320600160ff19825416179055600080516020610a41833981519152339380a4600190565b50509056fe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a71461060c575081630660f1e8146105bc578163143ba4f3146103f5578163248a9ca3146103cb5781632f2ff15d146103a157816336568abe1461035b578163372500ab146101cf57816391d1485414610188578163a217fddf1461016d578163d1af0c7d14610129578163d547741f146100e6575063e0dd2457146100a957600080fd5b346100e257816003193601126100e257602090517f51785d261c3b3e8c2cfe2d0e108b9ab2b1fb703ff9e9e49aba4ebdc85c36152b8152f35b5080fd5b91905034610125578060031936011261012557610121913561011c600161010b61065f565b9383875281602052862001546106ab565b61076f565b5080f35b8280fd5b5050346100e257816003193601126100e257517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346100e257816003193601126100e25751908152602090f35b9050346101255781600319360112610125578160209360ff926101a961065f565b90358252600186528282206001600160a01b039091168252855220549151911615158152f35b91905034610125578260031936011261012557600283541461034e57600283553383526020906002825280842054928315610320573385526002835260018286208681550161021f858254610820565b90557f00000000000000000000000000000000000000000000000000000000000000009082518481019063a9059cbb60e01b8252336024820152866044820152604481526080810181811067ffffffffffffffff82111761030d57855251859188919082865af1156103035785513d6102fa57506001600160a01b0382163b155b6102d7575050907ffc30cddea38e2bf4d6ea7d3f9ed3b6ad7f176419f4963bd81318067a4aee73fe91519283523392a26001815580f35b9151635274afe760e01b81526001600160a01b0390911691810191909152602490fd5b600114156102a0565b82513d87823e3d90fd5b634e487b7160e01b895260418452602489fd5b82606492519162461bcd60e51b8352820152600a6024820152694e6f207265776172647360b01b6044820152fd5b51633ee5aeb560e01b8152fd5b8383346100e257806003193601126100e25761037561065f565b90336001600160a01b03831603610392575061012191923561076f565b5163334bd91960e11b81528390fd5b9190503461012557806003193601126101255761012191356103c6600161010b61065f565b6106ef565b90503461012557602036600319011261012557816020936001923581528285522001549051908152f35b9190503461012557806003193601126101255767ffffffffffffffff82358181116105b857610427903690850161067a565b93909260249283359081116105b457610443903690840161067a565b907f51785d261c3b3e8c2cfe2d0e108b9ab2b1fb703ff9e9e49aba4ebdc85c36152b91828952600197602093898552858b20338c52855260ff868c20541615610597575081810361056357895b8a82821061049b5780f35b7fdf29796aad820e4bb192f3a8d631b76519bcd2cbe77cc85af20e9df53cece0868661052b6104ee85878f8d976104d3848d8f6107e6565b6001600160a01b03999035908a6104f36104ee8888886107e6565b61080c565b168352600291828a5261050a828520918254610820565b90558a61051b6104ee8888886107e6565b16835281895242922001556107e6565b9261053785888a6107e6565b35938a519485521692a26000198114610551578901610490565b634e487b7160e01b8b5260118752878bfd5b845162461bcd60e51b8152808701859052600f818901526e098cadccee8d040dad2e6dac2e8c6d608b1b6044820152606490fd5b855163e2517d3f60e01b8152338189015280890191909152604490fd5b8680fd5b8480fd5b90503461012557602036600319011261012557356001600160a01b038116908190036101255782829160609452600260205220805491600260018301549201549181519384526020840152820152f35b849134610125576020366003190112610125573563ffffffff60e01b81168091036101255760209250637965db0b60e01b811490811561064e575b5015158152f35b6301ffc9a760e01b14905083610647565b602435906001600160a01b038216820361067557565b600080fd5b9181601f840112156106755782359167ffffffffffffffff8311610675576020808501948460051b01011161067557565b80600052600160205260406000203360005260205260ff60406000205416156106d15750565b6044906040519063e2517d3f60e01b82523360048301526024820152fd5b906000918083526001602052604083209160018060a01b03169182845260205260ff6040842054161560001461076a5780835260016020526040832082845260205260408320600160ff198254161790557f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d339380a4600190565b505090565b906000918083526001602052604083209160018060a01b03169182845260205260ff60408420541660001461076a578083526001602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4600190565b91908110156107f65760051b0190565b634e487b7160e01b600052603260045260246000fd5b356001600160a01b03811681036106755790565b9190820180921161082d57565b634e487b7160e01b600052601160045260246000fdfea26469706673582212200ee404d24e25cb88050c54e3d2f62b9036908625d91b181da06f74c5c57283b564736f6c634300081400332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d",
    "deployedBytecode": "0x608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a71461060c575081630660f1e8146105bc578163143ba4f3146103f5578163248a9ca3146103cb5781632f2ff15d146103a157816336568abe1461035b578163372500ab146101cf57816391d1485414610188578163a217fddf1461016d578163d1af0c7d14610129578163d547741f146100e6575063e0dd2457146100a957600080fd5b346100e257816003193601126100e257602090517f51785d261c3b3e8c2cfe2d0e108b9ab2b1fb703ff9e9e49aba4ebdc85c36152b8152f35b5080fd5b91905034610125578060031936011261012557610121913561011c600161010b61065f565b9383875281602052862001546106ab565b61076f565b5080f35b8280fd5b5050346100e257816003193601126100e257517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346100e257816003193601126100e25751908152602090f35b9050346101255781600319360112610125578160209360ff926101a961065f565b90358252600186528282206001600160a01b039091168252855220549151911615158152f35b91905034610125578260031936011261012557600283541461034e57600283553383526020906002825280842054928315610320573385526002835260018286208681550161021f858254610820565b90557f00000000000000000000000000000000000000000000000000000000000000009082518481019063a9059cbb60e01b8252336024820152866044820152604481526080810181811067ffffffffffffffff82111761030d57855251859188919082865af1156103035785513d6102fa57506001600160a01b0382163b155b6102d7575050907ffc30cddea38e2bf4d6ea7d3f9ed3b6ad7f176419f4963bd81318067a4aee73fe91519283523392a26001815580f35b9151635274afe760e01b81526001600160a01b0390911691810191909152602490fd5b600114156102a0565b82513d87823e3d90fd5b634e487b7160e01b895260418452602489fd5b82606492519162461bcd60e51b8352820152600a6024820152694e6f207265776172647360b01b6044820152fd5b51633ee5aeb560e01b8152fd5b8383346100e257806003193601126100e25761037561065f565b90336001600160a01b03831603610392575061012191923561076f565b5163334bd91960e11b81528390fd5b9190503461012557806003193601126101255761012191356103c6600161010b61065f565b6106ef565b90503461012557602036600319011261012557816020936001923581528285522001549051908152f35b9190503461012557806003193601126101255767ffffffffffffffff82358181116105b857610427903690850161067a565b93909260249283359081116105b457610443903690840161067a565b907f51785d261c3b3e8c2cfe2d0e108b9ab2b1fb703ff9e9e49aba4ebdc85c36152b91828952600197602093898552858b20338c52855260ff868c20541615610597575081810361056357895b8a82821061049b5780f35b7fdf29796aad820e4bb192f3a8d631b76519bcd2cbe77cc85af20e9df53cece0868661052b6104ee85878f8d976104d3848d8f6107e6565b6001600160a01b03999035908a6104f36104ee8888886107e6565b61080c565b168352600291828a5261050a828520918254610820565b90558a61051b6104ee8888886107e6565b16835281895242922001556107e6565b9261053785888a6107e6565b35938a519485521692a26000198114610551578901610490565b634e487b7160e01b8b5260118752878bfd5b845162461bcd60e51b8152808701859052600f818901526e098cadccee8d040dad2e6dac2e8c6d608b1b6044820152606490fd5b855163e2517d3f60e01b8152338189015280890191909152604490fd5b8680fd5b8480fd5b90503461012557602036600319011261012557356001600160a01b038116908190036101255782829160609452600260205220805491600260018301549201549181519384526020840152820152f35b849134610125576020366003190112610125573563ffffffff60e01b81168091036101255760209250637965db0b60e01b811490811561064e575b5015158152f35b6301ffc9a760e01b14905083610647565b602435906001600160a01b038216820361067557565b600080fd5b9181601f840112156106755782359167ffffffffffffffff8311610675576020808501948460051b01011161067557565b80600052600160205260406000203360005260205260ff60406000205416156106d15750565b6044906040519063e2517d3f60e01b82523360048301526024820152fd5b906000918083526001602052604083209160018060a01b03169182845260205260ff6040842054161560001461076a5780835260016020526040832082845260205260408320600160ff198254161790557f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d339380a4600190565b505090565b906000918083526001602052604083209160018060a01b03169182845260205260ff60408420541660001461076a578083526001602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4600190565b91908110156107f65760051b0190565b634e487b7160e01b600052603260045260246000fd5b356001600160a01b03811681036106755790565b9190820180921161082d57565b634e487b7160e01b600052601160045260246000fdfea26469706673582212200ee404d24e25cb88050c54e3d2f62b9036908625d91b181da06f74c5c57283b564736f6c63430008140033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
  
  

export const YieldFarmingVaultABI = YieldFarmingVault.abi;

export const RewardsDistributorABI = RewardsDistributor.abi;

export const PaymentGatewayABI = PaymentGateway.abi;