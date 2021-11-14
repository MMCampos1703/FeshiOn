CREATE TABLE user_account (
	id SERIAL NOT NULL,
	username varchar(80) not null,
	email varchar(80) not null,
	password varchar(200) not null,
	created_at timestamp with time zone not null default CURRENT_TIMESTAMP,
	updated_at timestamp with time zone default CURRENT_TIMESTAMP,
	deleted_at timestamp with time zone default NULL,
	PRIMARY KEY (id)
)