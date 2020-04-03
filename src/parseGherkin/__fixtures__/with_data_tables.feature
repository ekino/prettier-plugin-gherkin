@tag
Feature: Title of feature

  As an API client I can request my api

  #Comment
  Scenario: Query on API, with success response

    Given I load test data files
      | path                   | type  |
      | data/mocks/data.json   | mocks |
      | data/redis/tokens.json | redis |
    When I GET /api/v2/route
