# Project Title

Coding Challenge for Dot Align. Second challenge is live at duck-pond.surge.sh.

## Description

The first section asked me to write three SQL queries to get information from a series of linked tables.
The second section asked me to write a short coding program.

I thoroughly enjoyed doing this challenge, and I hope you will enjoy my solutions.  

## Messages Database (1st Section)

1.

SELECT UrlText FROM Domain;

2.

SELECT AddressText, Name FROM EmailAddress
INNER JOIN Person
ON EmailAddress.PersonId = Person.Id;

3.

SELECT UrlText AS DomainName,
COUNT(Type) AS EmailsSent
FROM Domain
JOIN EmailAddress
ON Domain.Id = EmailAddress.DomainId
JOIN Participant
ON EmailAddress.Id = Participant.EmailAddressId
LEFT JOIN ParticipantType
ON Participant.ParticipantTypeid = ParticipantType.id
AND Type IN('To','CC','BCC')
GROUP BY UrlText;

## On Golden Pond (2nd Section)

I used Javascript ES5 to solve this problem. The html page allows user to input information into a form.
Once submitted an alert with the answer pops up on screen.
Code can be viewed in the index.js file.

### Installation and Display

There is no need to install anything.

Once the repository is forked to local file
you can open the index.html file in any browser.

There is also the option to view the project online at duck-pond.surge.sh

Alternatively, the contents of both the index.html and index.js files can be copied.
They must be placed in the same directory or folder in order for js file to be properly linked.
Once contents are copied into separate html and js files with title "index", the index.html file can be viewed on any browser.
