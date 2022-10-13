There is two files for the scenarios:
1. scenariosTOWRITE.xlsx
2. scenariosTOLOAD.csv

The .xlsx file is for writing and adding scenarios, and the .csv file is the file the server will load to access all the scenarios.
Therefore please use the .xlsx file for adding new scenarios, and we can then periodically (~once a week) save a copy of it as a .csv file to update the scenarios we can access on the website.

Each scenario occupies one row, and each row has several columns. The final two columns are each a list which represents the stat changes from each option. The elements of the list follow the order:
[Change to people, change to credits, change to rations, change to miltiary]

The value of each element can be (-2,-1,0,1,2). Zero represents no change, 1/-1 represents a small change and 2/-2 represents a large change. The negative value denotes a decrease and a positive value denotes an increase.

If there's anything about the .xlsx file that doesn't make sense just send me a msg and I'll update the readme to clarify. The reason we have two seperate files is because .csv doesn't support excel formatting
and that makes it very difficult to read (If you open the .csv file you'll see what I mean).