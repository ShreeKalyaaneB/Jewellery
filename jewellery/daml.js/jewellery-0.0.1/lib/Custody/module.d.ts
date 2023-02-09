// Generated from Custody.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Give = {
  customer: damlTypes.Party;
  totalweight: damlTypes.Int;
};

export declare const Give:
  damlTypes.Serializable<Give> & {
  }
;


export declare type GoldCustody = {
  issuer: damlTypes.Party;
  owner: damlTypes.Party;
  weight: damlTypes.Int;
};

export declare interface GoldCustodyInterface {
  Archive: damlTypes.Choice<GoldCustody, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<GoldCustody, undefined>>;
  Give: damlTypes.Choice<GoldCustody, Give, damlTypes.ContractId<GoldCustody>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<GoldCustody, undefined>>;
}
export declare const GoldCustody:
  damlTypes.Template<GoldCustody, undefined, '85a6783dc8df6bfe886870364b8c3d4db5cf1ff94600448d584f5ab27e0fbdd0:Custody:GoldCustody'> &
  damlTypes.ToInterface<GoldCustody, never> &
  GoldCustodyInterface;

export declare namespace GoldCustody {
  export type CreateEvent = damlLedger.CreateEvent<GoldCustody, undefined, typeof GoldCustody.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<GoldCustody, typeof GoldCustody.templateId>
  export type Event = damlLedger.Event<GoldCustody, undefined, typeof GoldCustody.templateId>
  export type QueryResult = damlLedger.QueryResult<GoldCustody, undefined, typeof GoldCustody.templateId>
}


