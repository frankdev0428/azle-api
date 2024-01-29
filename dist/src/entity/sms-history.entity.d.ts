import { BaseEntity } from "typeorm";
import Customer from "./customer.entity";
import MessageMedia from "./message-media.entity";
export default class SMSHistory extends BaseEntity {
    id: number;
    type: number;
    body: string;
    numSegments: string;
    direction: string;
    from: string;
    to: string;
    dateUpdated: Date;
    price: string;
    errorMessage: string;
    uri: string;
    accountSid: string;
    numMedia: string;
    status: string;
    messagingServiceSid: string;
    sid: string;
    dateSent: Date;
    dateCreated: Date;
    errorCode: number;
    priceUnit: string;
    apiVersion: string;
    subresourceUris: string;
    toCountry: string;
    toState: string;
    smsMessageSid: string;
    toCity: string;
    fromZip: string;
    smsSid: string;
    fromState: string;
    smsStatus: string;
    fromCity: string;
    fromCountry: string;
    toZip: string;
    referralNumMedia: string;
    messageSid: string;
    createdDate: Date;
    updatedDate: Date;
    customerId: number;
    customer: Customer;
    media: MessageMedia[];
}