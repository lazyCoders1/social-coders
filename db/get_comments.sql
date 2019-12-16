select * from sc_comments
where post_id = $1
order by id asc;