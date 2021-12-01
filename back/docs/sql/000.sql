CREATE TABLE user_account (
	id SERIAL NOT NULL,
	nickname varchar(80) not null,
	email varchar(80) not null,
	password varchar(200) not null,
	created_at timestamp with time zone not null default CURRENT_TIMESTAMP,
	updated_at timestamp with time zone default CURRENT_TIMESTAMP,
	deleted_at timestamp with time zone default NULL,
	PRIMARY KEY (id)
)

CREATE TABLE item (
	id SERIAL NOT NULL,
	image64 text not null,
    user_id integer not null,
    favorites integer not NULL DEFAULT 0,
	name text not null,
	category text not null,
	created_at timestamp with time zone not null default CURRENT_TIMESTAMP,
	updated_at timestamp with time zone default CURRENT_TIMESTAMP,
	deleted_at timestamp with time zone default NULL,
	PRIMARY KEY (id)
)

CREATE TABLE user_account_item (
	user_account_id integer NOT NULL,
	item_id integer NOT NULL,
	PRIMARY KEY (user_account_id, item_id),
	CONSTRAINT fk_user_account_id FOREIGN KEY(user_account_id) REFERENCES user_account(id),
	CONSTRAINT fk_item_id FOREIGN KEY(item_id) REFERENCES item(id)
)