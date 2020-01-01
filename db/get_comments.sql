select c.id, author_id, content, profile_pic, name from sc_comments c
join sc_users u on author_id = u.id
where post_id = $1
order by c.id desc;