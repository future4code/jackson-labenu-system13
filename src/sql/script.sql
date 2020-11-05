CREATE TABLE IF NOT EXISTS student ( 
	id INT NOT NULL,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	email2 VARCHAR(50) NOT NULL,
	birthdate DATE NOT NULL,
	mission_id INT,
	PRIMARY KEY(id),
	FOREIGN KEY (mission_id) REFERENCES mission(id)
);
CREATE TABLE IF NOT EXISTS student_hobby(
	student_id INT NOT NULL,
	hobby_id INT NOT NULL,
	PRIMARY KEY (student_id, hobby_id),
	FOREIGN KEY (student_id) REFERENCES student (id),
	FOREIGN KEY	(hobby_id) REFERENCES hobby(id)
);
CREATE TABLE IF NOT EXISTS hobby(
	id INT NOT NULL,
	name VARCHAR(50) NOT NULL,
	PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS mission(
	id INT NOT NULL ,
	name VARCHAR(40),
	start_date DATE NOT NULL,
	end_date DATE NOT NULL,
	module INT NOT NULL,
	PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS teacher(
	id INT NOT NULL,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	birthdate DATE NOT NULL,
	mission_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (mission_id) REFERENCES mission(id)
);
CREATE TABLE IF NOT EXISTS teacher_specialty(
	teacher_id INT NOT NULL,
	specialty_id INT NOT NULL,
	PRIMARY KEY (teacher_id, specialty_id),
	FOREIGN KEY (teacher_id) REFERENCES teacher (id),
	FOREIGN KEY	(specialty_id) REFERENCES specialty(id)
	
);
CREATE TABLE IF NOT EXISTS specialty (
	id INT NOT NULL,
	name VARCHAR(50) NOT NULL,
	PRIMARY KEY (id)
);


