delete from post_likes
where post_id = $1;

delete from sc_comments
where post_id = $1;

delete from sc_favs
where post_id = $1;

delete from sc_posts
where id = $1;