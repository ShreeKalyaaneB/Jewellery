// Generated from Payment.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Pay = {
  jeweller: damlTypes.Party;
  amount: damlTypes.Numeric;
};

export declare const Pay:
  damlTypes.Serializable<Pay> & {
  }
;


export declare type Payable = {
  sender: damlTypes.Party;
  receiver: damlTypes.Party;
  priceAmount: damlTypes.Numeric;
};

export declare interface PayableInterface {
  Archive: damlTypes.Choice<Payable, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Payable, undefined>>;
  Pay: damlTypes.Choice<Payable, Pay, damlTypes.ContractId<Payable>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Payable, undefined>>;
}
export declare const Payable:
  damlTypes.Template<Payable, undefined, '85a6783dc8df6bfe886870364b8c3d4db5cf1ff94600448d584f5ab27e0fbdd0:Payment:Payable'> &
  damlTypes.ToInterface<Payable, never> &
  PayableInterface;

export declare namespace Payable {
  export type CreateEvent = damlLedger.CreateEvent<Payable, undefined, typeof Payable.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Payable, typeof Payable.templateId>
  export type Event = damlLedger.Event<Payable, undefined, typeof Payable.templateId>
  export type QueryResult = damlLedger.QueryResult<Payable, undefined, typeof Payable.templateId>
}


