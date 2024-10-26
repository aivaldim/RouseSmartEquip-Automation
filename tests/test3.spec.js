const { test, expect } = require("@playwright/test");
import RequestsManager from "../utils/requestsManager";
const tests_data = require('../constants/tests-data/tests-data');

test.describe("Test 3", () => {
    test('API Test', async ({ request }) => {
        const requestManager = new RequestsManager(request);

        const response = await requestManager.searchRequestGET(
            tests_data.test3.q,
            tests_data.test3.format);

        expect(response.status()).toBe(200);
        expect(response).toBeTruthy();

        const responseJSON = await response.json();

        /* The following its to display each Icon item */
        //console.log(responseJSON.RelatedTopics[0].Icon);
        //console.log(responseJSON.RelatedTopics[1].Icon);
        //console.log(responseJSON.RelatedTopics[2].Icon);
        //console.log(responseJSON.RelatedTopics[3].Icon);
        //console.log(responseJSON.RelatedTopics[4].Icon);

        for(const relatedTopic of responseJSON.RelatedTopics){
            const iconURL = relatedTopic.Icon?.URL;
            if (iconURL) {
                console.log('Icon: ');
                console.log(relatedTopic.Icon);
            }
        }
    });
});