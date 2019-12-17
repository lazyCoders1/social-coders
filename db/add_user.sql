insert into sc_users (name, email)
values (${name}, ${email})
returning id;