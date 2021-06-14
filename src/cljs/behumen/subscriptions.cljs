(ns behumen.subscriptions
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :db
 (fn [db [_ key]]
   (get-in db (if (vector? key)
                key [key]))))

(reg-sub
 :get-current-page-type
 (fn [db [_]]
   (get db :current-page-type)))
