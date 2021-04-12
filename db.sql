Create Table person(
    person_id serial,
    name text,
    PRIMARY KEY(person_id)
);

Create Table journal(
person_id int,
entry_id serial,
topic text,
post text,
FOREIGN KEY(person_id) 
REFERENCES person(person_id)
);

INSERT INTO person(name) VALUES('Lambo');
INSERT INTO person(name) VALUES('Arthur');
INSERT INTO person(name) VALUES('Bone Dragon');

INSERT INTO journal(person_id, topic, post) VALUES(1, 'test', 'This is my first post');
INSERT INTO journal(person_id, topic, post) VALUES(2, 'test', 'This is my first post');
INSERT INTO journal(person_id, topic, post) VALUES(3, 'test', 'This is my first post');
INSERT INTO journal(person_id, topic, post) VALUES(1, 'Intro', 'My name is lambo I go voom voom skrt');
INSERT INTO journal(person_id, topic, post) VALUES(1, 'sotry', 'Once upon a time i did really cool stuff');
INSERT INTO journal(person_id, topic, post) VALUES(2, 'Background', 'I am the king of Britania');
INSERT INTO journal(person_id, topic, post) VALUES(1, 'story', 'I was a dragon and then i got ripped now i have no fat so i am a bone dragon');



