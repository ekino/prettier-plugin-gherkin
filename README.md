prettier-plugin-gherkin
Format gherkin files (.feature) with prettier

Setup

Add this package to your project and prettier will use it automatically to format .feature files.

Internals

This package will download a Go binary based on your system OS built from the official Gherkin team repository (https://github.com/cucumber/gherkin-go), that will the parse AST of your .feature files for prettier

Rules

Don't include comments in your data tables.

Credits

The project is forked from this repository : https://github.com/Spy-Seth/prettier-plugin-gherkin
