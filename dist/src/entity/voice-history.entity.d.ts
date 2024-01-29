import { BaseEntity } from "typeorm";
import Customer from "./customer.entity";
import RecordHistory from "./record-history.entity";
export default class VoiceHistory extends BaseEntity {
    id: number;
    type: number;
    accountSid: string;
    apiVersion: string;
    applicationSid: string;
    callSid: string;
    callStatus: string;
    callToken: string;
    called: string;
    calledCity: string;
    calledCountry: string;
    calledState: string;
    calledZip: string;
    caller: string;
    callerCity: string;
    callerCountry: string;
    callerState: string;
    callerZip: string;
    direction: string;
    dialBridged: string;
    dialCallSid: string;
    dialCallStatus: string;
    from: string;
    fromCity: string;
    fromCountry: string;
    fromState: string;
    fromZip: string;
    stirPassportToken: string;
    stirVerstat: string;
    to: string;
    toCity: string;
    toCountry: string;
    toState: string;
    toZip: string;
    timestamp: string;
    callbackSource: string;
    sequenceNumber: string;
    duration: string;
    callDuration: string;
    childSids: string;
    createdDate: Date;
    updatedDate: Date;
    customerId: number;
    customer: Customer;
    records: RecordHistory[];
}