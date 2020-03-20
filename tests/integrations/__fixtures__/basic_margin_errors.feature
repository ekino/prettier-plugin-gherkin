Feature: Title of feature

    As an API client I can request my api

  #Comment
    Scenario: Query on API, with success response

                Given I load test data files
            | path                           | type |
            | data/mocks/data.json| mocks|
            | data/redis/tokens.json         | redis|
        When I GET /api/v2/route
    Then response status code should be 200
        And json response should match
            | field                              | matcher| value                                                                                                                                                                |
            | data.title    | match  | Small  |
            | data.URL      | equal  | wwww.longggggggggggggggggggggggggggggggggggg.url     |
    And response json body should match snapshot
            | field                        | matcher| value |
            | detail.informations.URLMedias| type   | string|
