# Thoughts and Bugs found

These are probably intentionally placed for interview purposes but, here they are:

1. By analysing the system under test I couldn't find API calls being fired by the browser upon submitting a new entity
1. The confirmation modal always shows the same full name 'John Doe' instead of the one entered in the form
1. In the UI, there isn't validation for:
    1. The full name is required (I can submit without)
    1. The country is required (I can submit without)
    1. Year of Birth in general (I can submit invalid, none or future dates)
    1. Year of Birth is dd/mm/yyyy but requirement says mm/dd/yyy
    1. The position I don't know why it's a password format, requirement asks for a string
    1. URL field is a bit not correct, only checks if it's a text, followed by a dot followed by text. I can also submit without it
    1. Risk in the UI is a list of 4 entries but API is a number from 1 to 5 (one more?)
1. The UI takes a lot of time, sometimes, to load, such as more than 10 seconds
1. The entity submitted in the UI is not exposed in the retrieval data using the API, making it difficult to assert if data was correctly stored
