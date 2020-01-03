select p.id, title, img, content, profile_pic, name, time_stamp from sc_posts p
join sc_users u on p.author_id = u.id
join sc_favs f on f.post_id = p.id
where user_id = $1
order by f.id desc;