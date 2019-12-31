select p.id, author_id, category, title, img, content, profile_pic, name from sc_posts p
join sc_users u on p.author_id = u.id
where p.id = $1;