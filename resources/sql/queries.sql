-- :name create-email! :! :n
-- :doc creates a new email record
INSERT INTO emails
(email)
VALUES (:email)

-- :name get-email :? :1
-- :doc get an email
SELECT * FROM emails
where email = :email
