# Catch Up



Catch up occurs whenever an account wants to spend or receive cash and when it wants to claim pref payments.



By default, pref payments are not added to an account balance. The payments are added to a queue and when the credits are claimed we need to demurrage the balance at each interval for each payment in the queue.



For example:



Demurrage Rate: 12%

Last Catch up: 1/1/2000

Balance $1000.

Pref Payment Queue:

2/1/2000: 200 from account x

3/1/2000: 300 from account y

4/1/2000: Account wants to catch up.



We will demurrage

$1000 for one month (1/1 to 2/1) $100

New Balance $900

Add $200 pref payment

New Balance $1100

$1100 for one month (2/1 to 3/1) $110

New Balance $990

Add $300 from pref payment

New balance $1290

$1290 for one month (3/1 to 4/1) $12.9

New Balance $1277.1

Account is caught up.
