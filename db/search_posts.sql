select * from sc_posts sp
join sc_users su on (su.id=sp.author_id)
where title like %$1%
or content like %$1%
or category like %$1%
or name like %$1%
order by sp.id desc;