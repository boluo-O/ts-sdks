// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { bcs } from '@mysten/sui/bcs';
import * as vec_set from './vec_set.js';
import * as type_name from '../0x0000000000000000000000000000000000000000000000000000000000000001/type_name.js';
import * as object from './object.js';
import * as balance from './balance.js';
export function TransferRequest() {
	return bcs.struct('TransferRequest', {
		item: bcs.Address,
		paid: bcs.u64(),
		from: bcs.Address,
		receipts: vec_set.VecSet(type_name.TypeName()),
	});
}
export function TransferPolicy() {
	return bcs.struct('TransferPolicy', {
		id: object.UID(),
		balance: balance.Balance(),
		rules: vec_set.VecSet(type_name.TypeName()),
	});
}
export function TransferPolicyCap() {
	return bcs.struct('TransferPolicyCap', {
		id: object.UID(),
		policy_id: bcs.Address,
	});
}
export function TransferPolicyCreated() {
	return bcs.struct('TransferPolicyCreated', {
		id: bcs.Address,
	});
}
export function TransferPolicyDestroyed() {
	return bcs.struct('TransferPolicyDestroyed', {
		id: bcs.Address,
	});
}
export function RuleKey() {
	return bcs.struct('RuleKey', {
		dummy_field: bcs.bool(),
	});
}
