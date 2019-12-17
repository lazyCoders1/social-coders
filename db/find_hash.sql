select * from sc_users su 
join sc_users_hash suh on su.id = suh.user_id
where email = $1;