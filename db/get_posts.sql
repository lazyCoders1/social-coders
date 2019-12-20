select p.id, title, img, content, name, profile_pic from sc_posts p
join sc_users u on u.id = author_id
where category = $1
order by p.id desc;