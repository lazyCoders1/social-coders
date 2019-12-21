create table sc_users (
  id serial primary key,
  name varchar(50),
  email varchar(100),
  profile_pic text,
  cover_photo text,
  headline varchar,
  city varchar(50),
  state varchar(2),
  linked_in text,
  github text
);
-- Dummy User
insert into sc_users (name, email, profile_pic, cover_photo, headline, city, state, linked_in, github)
values ('Olivia Arnold', '1', 'https://i.pinimg.com/600x315/a6/0d/68/a60d685194a7fd984d08a595a0a99ae7.jpg', 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Full Stack Developer', 'Lehi', 'UT', 'https://www.linkedin.com/in/harrison-hancock/', 'https://github.com')

create table sc_users_location (
  id serial primary key,
  zipcode text,
  longitude text,
  latitude text,
  user_id int references sc_users(id)
);

create table sc_users_hash (
  hash_id serial primary key,
  hash text,
  user_id int references sc_users(id) 
);

create table sc_posts (
  id serial primary key,
  title text,
  img text,
  content text,
  author_id integer references sc_users(id),
  category varchar(15)
);

create table sc_comments (
  id serial primary key,
  content text,
  post_id int references sc_posts(id),
  author_id int references sc_users(id)
);

create table chatroom (
  id serial primary key
); 

create table chatroom_junction (
  id serial primary key,
  user_id int references sc_users(id),
  chatroom_id int references chatroom(id)
);

create table meetups(
  id serial primary key,
  title varchar(25),
  img text,
  description varchar,
  time varchar(32),
  date varchar(35), 
  user_id integer references sc_users(id),
  street varchar(120),
  city varchar(50),
  state varchar(30),
  zipcode varchar(45)
);

alter table meetups 
alter column date 
set data type varchar(25);

alter table meetups 
add column time varchar(15);

create table sc_favs (
id serial primary key,
user_id int references sc_users(id),
post_id int references sc_posts(id)
);

insert into sc_favs (user_id, post_id)
values(25, 1),
(25, 2),
(25, 3)
