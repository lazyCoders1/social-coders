select count(*) from sc_favs
where post_id = ${post_id} 
and user_id = ${user_id};