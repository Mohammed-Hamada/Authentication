INSERT INTO users (username, email, password)
VALUES ('mohammed', 'mohammed@gmail.com', '123456'),
  ('ahmed', 'ahmed@gmail.com', '123456'),
  ('sami', 'sami@gmail.com', '123456');
INSERT INTO todos (user_id, title, content)
VALUES (
    3,
    'Go to market',
    'i want to go to market with my friend'
  ),
  (
    1,
    'Go to schoool',
    'i want to go to school today'
  ),
  (
    2,
    'Make a cup of tea',
    'i want to make a cup of tea and drink it'
  );