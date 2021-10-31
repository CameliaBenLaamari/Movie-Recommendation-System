# Movie Recommendation System using Collaborative Filtering and Apriori Algorithm

Recommendation systems are Artificial Intelligence based algorithms that skim through all possible options and create a customized list of items that are interesting and relevant to an individual. These results are based on their profile, search/browsing history, what other people with similar traits/demographics are watching.

## Collaborative Filtering
Collaborative filtering is a technique that can filter out items that a user might like on the basis of reactions by similar users.
It works by searching a large group of people and finding a smaller set of users with tastes similar to a particular user. It looks at the items they like and combines them to create a ranked list of suggestions.

## Apriori Algorithm
The Apriori algorithm uses frequent itemsets to generate association rules, and it is designed to work on the databases that contain transactions. With the help of the  association rule, it determines how strongly or how weakly two objects are connected.

## Hybrid Approach
The proposed solution consists of two parts: The first part will deal with the user's favorite movies and the second part will deal with their non-favorite movies. These two categories of movies are based on the user's rating assigned to each movie. We used the following rule: 
- If the user's rating >= 3.5: The movie is considered as *favorite*
- Otherwise the movie is considered as *non-favorite*

The algorithm takes into account all movies that have been rated by a user, even if these ratings are low. The principle of recommendation is not based on exact science, so it is better to consider all the labeled data from the user.

After creating the two categories, we apply two different recommendation algorithms:

1. First, we apply the Apriori Algorithm, which is based on the association rule, on the favorite movies. The Apriori algorithm explores frequent itemsets to generate a list of recommended movies, personalized to each user. 

2. For the non-preferred movies, we use the Collaborative Filtering method which in turn generates a list of recommended movies. 

In the end, we will have a final list composed of several movies recommended to the user and which are generated from the favorite and non-favorite movies.


## Demo
Link: https://drive.google.com/file/d/1J_RMWj4xIOm5zx7OAHeOkE-hZL7UTtXV/view?usp=sharing
