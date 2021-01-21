You are given a complex list of n products, each with a name, price, and weight. 
Find out how many duplicate products are present within the list. 
Duplicate products contain identical parameters for all fields in the list (ie. name, price, and weight)

Example: 

There are n=5 products with attributes listed in three arrays, aligned by index. 

name = [ball, bat , glove, glove, glove]
price = [2, 3, 1, 2, 1]
weight = [2, 5, 1, 1, 1]

A complete item description for item 0: (name[0], prices[0], weight[0]) is (ball, 2, 2)

Name    Price   Weight
ball    2       2
bat     3       5
glove   1       1   
glove   2       1   
glove   1       1   

The first two items are unique. 
The two gloves at indices 2 and 4 are equal in all three attributes so there is 1 duplicate. 
The last glove at index 3 has a different price from the other two, so it is not a duplicate. 

There is 1 duplicate item in the original list. 


