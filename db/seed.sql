create table sc_users (
  id serial primary key,
  name varchar(50),
  email text,
  profile_pic text
);

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
  date TIMESTAMP, 
  user_id integer references sc_users(id),
  street varchar(120),
  city varchar(50),
  state varchar(2),
  zipcode integer
)