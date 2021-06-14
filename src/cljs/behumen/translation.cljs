(ns behumen.translation)

(def dictionary
  {:ar {}})

(defn tr [message & {:keys [lang]}]
  
  (if (get-in dictionary [lang message])
    
    (get-in dictionary [lang message])
    message))
