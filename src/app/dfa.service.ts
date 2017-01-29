import { Injectable }    from '@angular/core';
import {Feed} from "./feed";
import {Provider} from "./provider";

@Injectable()
export class DFAService {
    constructor() {}
    getFeeds(): Feed[] {
        return [
            {feedId: "101", providerName: "bill"},
            {feedId: "102", providerName: "bob"},
            {feedId: "103", providerName: "ben"},
            {feedId: "104", providerName: "jim"},
        ];
    }
    getProviders(): Provider[] {
        return [
            {
                "name": "Azizi Media",
                "providerId": "a94fb79de09f48f78c84fe67d390faf3",
                "emailAddress": "neil.mc@autotrader.co.uk",
                "status": "ENABLED",
                "username": null,
                "passwordHash": null
            },
            {
                "name": "Carophagia",
                "providerId": "a6564864a75f486ea9431df650684792",
                "emailAddress": "alec.tunbridge@autotrader.co.uk",
                "status": "ENABLED",
                "username": null,
                "passwordHash": null
            },
            {
                "name": "Cheesey Provider",
                "providerId": "c2eb53e98ae44f2abf7a8fb1690f4817",
                "emailAddress": "test.datafeeds2@autotrader.co.uk",
                "status": "ENABLED",
                "username": null,
                "passwordHash": null
            },
            {
                "name": "GForces",
                "providerId": "3156dad57a7f4fc5a9a584bc349117f9",
                "emailAddress": "test.datafeeds@autotrader.co.uk",
                "status": "ENABLED",
                "username": null,
                "passwordHash": null
            },
            {
                "name": "GForces",
                "providerId": "6d5a69b2baef47dcbac6b260f1469323",
                "emailAddress": "test.datafeeds@autotrader.co.uk",
                "status": "ENABLED",
                "username": null,
                "passwordHash": null
            }];
    }
}
