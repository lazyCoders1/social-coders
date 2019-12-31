DELETE FROM post_likes 
WHERE user_id = ${user_id}
AND post_id = ${post_id};