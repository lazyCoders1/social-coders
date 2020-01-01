select count(*) from post_likes
where post_id = ${post_id} 
and user_id = ${user_id};