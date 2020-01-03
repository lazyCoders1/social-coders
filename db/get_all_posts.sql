select p.id, author_id, title, img, content, name, profile_pic, category, time_stamp from sc_posts p
join sc_users u on u.id = author_id
order by p.id desc;