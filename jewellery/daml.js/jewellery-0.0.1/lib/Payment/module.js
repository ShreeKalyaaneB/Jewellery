"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');


exports.Pay = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({jeweller: damlTypes.Party.decoder, amount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    jeweller: damlTypes.Party.encode(__typed__.jeweller),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
  };
}
,
};



exports.Payable = damlTypes.assembleTemplate(
{
  templateId: '85a6783dc8df6bfe886870364b8c3d4db5cf1ff94600448d584f5ab27e0fbdd0:Payment:Payable',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({sender: damlTypes.Party.decoder, receiver: damlTypes.Party.decoder, priceAmount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    sender: damlTypes.Party.encode(__typed__.sender),
    receiver: damlTypes.Party.encode(__typed__.receiver),
    priceAmount: damlTypes.Numeric(10).encode(__typed__.priceAmount),
  };
}
,
  Archive: {
    template: function () { return exports.Payable; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Pay: {
    template: function () { return exports.Payable; },
    choiceName: 'Pay',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Pay.decoder; }),
    argumentEncode: function (__typed__) { return exports.Pay.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Payable).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Payable).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Payable);

