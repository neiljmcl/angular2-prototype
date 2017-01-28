import { Injectable }    from '@angular/core';
import {Feed} from "./feed";

@Injectable()
export class FeedService {
    constructor() {}
    getFeeds(): Feed[] {
        return [
            {feedId: "101", providerName: "bill"},
            {feedId: "102", providerName: "bob"},
            {feedId: "103", providerName: "ben"},
            {feedId: "104", providerName: "jim"},
        ];
    }
}
