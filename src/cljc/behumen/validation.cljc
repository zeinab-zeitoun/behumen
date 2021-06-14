(ns behumen.validation
  (:require [bouncer.validators :as v]))

(def email-validation
  {:email [v/required v/email]})
