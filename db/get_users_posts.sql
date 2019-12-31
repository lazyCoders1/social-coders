-- select * from sc_posts
-- where author_id = $1
-- order by id desc;

select p.id, author_id, title, img, content, profile_pic, category, name from sc_posts p
join sc_users u on p.author_id = u.id
where p.author_id = $1
order by id desc;